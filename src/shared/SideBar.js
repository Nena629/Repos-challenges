import React from 'react'
import { LINK_ITEMS_DATA } from '../data/link-items'
import SideBarItem from './SideBarItem'
import "./../styles/admin.css"

const SideBar = () => {
    return (
        <>
            <div style={{ height: "100vh" , backgroundColor:"#e6e6fa" }} className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation" >
                <div className="logo">
                    <a hef="home.html">
                        <img src="https://i.pinimg.com/564x/02/1e/b2/021eb20eccdfcee51ccc02880d19c0bf.jpg" alt="" className="logo" />
                    </a>
                </div>
                <div className="navi">
                    <ul>
                        {
                            LINK_ITEMS_DATA.
                                map(li =>
                                    <SideBarItem
                                        key={li.id}
                                        linkItem={li}
                                    />)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideBar