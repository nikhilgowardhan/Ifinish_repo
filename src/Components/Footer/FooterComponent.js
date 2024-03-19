import React from 'react';
import './FooterComponent.css';

const footerData = [
    { 
        title : "QUICK LINKS",
        links : ["HOME","PHOTS", "SHOP","JOIN OUR PHOTOGRAPHERS TEAM" ]
    },
    { 
        title : "ABOUT",
        links : ["ABOUT US","CONTACT US", "SUPPORT","TERMS AND CONDITIONS","PRIVACY POLICY" ]
    },
    { 
        title : "FOLLOW US",
        links : [ 'facebook', 'twitter','instagram']
    },
]




export default function FooterComponent() {
  return (
    <div>
        <div className='footer_'>
            {
                footerData.map(footerItem=>(
                    <div className='col-4'>
                        <h6 className='footer_head'>{footerItem.title}</h6>
                        <ul className='footer_ul'>
                            {
                                footerItem.links.map(links=>(
                                    <li>
                                        {links}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
        <div className='footer_row2'>
           <div>
           © 2015 iFinish - All Rights Reserved.
           </div>
        </div>
    </div>
  )
}
