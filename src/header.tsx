import React from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCat } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
    render() {
        return (
            <div className='w-full h-full border-b select-none bg-gray-900 text-gray-200'>
                <div className='h-full max-w-lg flex mx-auto'>
                    <div className='w-2/3 my-auto font-bold text-xl'><Link to='/'><span className='pr-1'><FontAwesomeIcon icon={faCat} /></span>Takanobu Nomura</Link></div>
                    <div className='w-1/3 my-auto'>
                        <button className="hover:bg-gray-800 font-bold rounded p-2 float-right">
                            <span className='p-2'><a href="https://github.com/lunarmlcat/portfolio" target="_blank" rel="noopener noreferrer"><span className='pr-1'><FontAwesomeIcon icon={faGithub} /></span>Source</a></span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;