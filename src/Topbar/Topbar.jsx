import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import './topbar.css';

export const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
        <div className="topleft">
            <span className="logo">LamaAdmin</span>
        </div>
        <div className="topright">
        <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
        </div>

        <div className="topbarIconContainer">
            <Language />
            <span className="topIconBag">2</span>
        </div>

        <div className="topbarIconContainer">
            <Settings />
        </div>
        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
        </div>
    </div>
  )
}
