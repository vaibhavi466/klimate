import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "./use-local-storage";
// import { useLocalStorage } from "./use-local-storage";

// Exported type for use elsewhere (e.g., CitySearch component)
export interface SearchHistoryItem {
  id: string;
  query: string;
  lat: number;
  lon: number;
  name: string;
  country: string;
  state?: string;
  searchedAt: number;
}

export function useSearchHistory(): {
  history: SearchHistoryItem[];
  addToHistory: ReturnType<typeof useMutation<SearchHistoryItem[], unknown, Omit<SearchHistoryItem, "id" | "searchedAt">>>;
  clearHistory: ReturnType<typeof useMutation<[], unknown, void>>;
} {
  const [history, setHistory] = useLocalStorage<SearchHistoryItem[]>("search-history", []);
  const queryClient = useQueryClient();

  const historyQuery = useQuery<SearchHistoryItem[]>({
    queryKey: ["search-history"],
    queryFn: () => history,
    initialData: history,
  });

  const addToHistory = useMutation({
    mutationFn: async (
      search: Omit<SearchHistoryItem, "id" | "searchedAt">
    ): Promise<SearchHistoryItem[]> => {
      const newSearch: SearchHistoryItem = {
        ...search,
        id: `${search.lat}-${search.lon}-${Date.now()}`,
        searchedAt: Date.now(),
      };

      // Remove duplicates and keep only last 10 searches
      const filteredHistory = (history as SearchHistoryItem[]).filter(
        (item) => !(item.lat === search.lat && item.lon === search.lon)
      );
      const newHistory = [newSearch, ...filteredHistory].slice(0, 10);

      setHistory(newHistory);
      return newHistory;
    },
    onSuccess: (newHistory) => {
      queryClient.setQueryData(["search-history"], newHistory);
    },
  });

  const clearHistory = useMutation({
    mutationFn: async (): Promise<[]> => {
      setHistory([]);
      return [];
    },
    onSuccess: () => {
      queryClient.setQueryData(["search-history"], []);
    },
  });

  return {
    history: historyQuery.data ?? [],
    addToHistory,
    clearHistory,
  };
}
