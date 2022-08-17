import { Chart } from '../../Chart/Chart'
import { userData } from '../../dummyData'
import { Featureinfo } from '../../Featuredinfo/Featureinfo'
import WidgetLg from '../../widgeLg/WidgetLg'
import WidgetSm from '../../widgeSm/WidgetSm'
import './home.css'


export const Home = () => {
  return (
    <div className='home'>
    <Featureinfo />
    <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
            <WidgetLg />
            <WidgetSm />
        </div>
    </div>
  )
}
