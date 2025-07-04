import { Button } from '@/components/ui/button'
import { RefreshCcw } from 'lucide-react'
import React from 'react'

const WeatherDashboard = () => {
  return (
    <div>
      {/* Favourite cities */}
        <div>
            <h1>My Location</h1>
            <Button variant={'outline'}
             size={"icon"}
            //  onClick={handleRefresh}
            // disabled = {}
            >
              <RefreshCcw className='h-4 w-4'/>
            </Button>
        </div>
          {/* Current and Hourly weather */}
    </div>
  )
}

export default WeatherDashboard
