import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faKaggle } from '@fortawesome/free-brands-svg-icons';
import ShowCassavaDialog from './cassava';
import ShowBrainDialog from './google-brain';

class Main extends React.Component {
    render() {
        const today = new Date();
        const year = today.getFullYear();

        return (
            <div className='w-full h-screen bg-cat'>
                {/* フレックスボックスでブロックを縦に並べる */}
                <div className="h-auto min-h-full max-w-lg m-auto flex-col px-4 bg-gray-900">
                    {/* アイコンを下に寄せる */}
                    <div className='w-full h-1/6 flex items-end pb-4 select-none'>
                        <img className='rounded-full pointer-events-none w-1/4 h-auto mx-auto animate-rotate-in-ver' src="./profile_icon.jpg" height="100" width="100" />
                    </div>
                    <div className='w-full h-5/6 text-gray-200'>
                        {/* About me */}
                        <p className='pb-2 text-xl font-bold underline decoration-solid decoration-4 decoration-red-800 text-orange-100'>About me</p>
                        <p className='font-bold'>Takanobu Nomura</p>
                        <p>(  Developer / Machine Learning / Image Processing )</p>
                        <p><FontAwesomeIcon icon={faLocationDot}/><span className='pl-1'>Osaka, Japan</span></p>
                        <br />
                        {/* Bio */}
                        <p className='pb-2 text-xl font-bold underline decoration-solid decoration-4 decoration-red-800 text-orange-100'>Bio</p>
                        <table className="border-collapse">
                            <tbody>
                                <tr>
                                    <td className='pr-4 font-bold'>1992</td>
                                    <td>born in Nara, Japan.</td>
                                </tr>
                                <tr>
                                    <td className='pr-4 font-bold'>2016</td>
                                    <td>Completed the undergraduate Program in the Department of Informatics at Kindai University.</td>
                                </tr>
                                <tr>
                                    <td className='pr-4 font-bold'>2018</td>
                                    <td>Completed the Master's Program in the Graduate School of Science and Engineering at Kindai University.</td>
                                </tr>
                                <tr>
                                    <td className='pr-4 font-bold'>2018</td>
                                    <td>Worked as a SE.</td>
                                </tr>
                                <tr>
                                    <td className='pr-4 font-bold'>2020</td>
                                    <td>Working as a AI Engineer.</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        {/* Something one likes */}
                        <p className='pb-2 text-xl font-bold underline decoration-solid decoration-4 decoration-red-800 text-orange-100'>Something one likes</p>
                        <p>Music, Playing Drums, Machine Learning, Reading a book</p>
                        <br />
                        {/* Links */}
                        <p className='pb-2 text-xl font-bold underline decoration-solid decoration-4 decoration-red-800 text-orange-100'>Links</p>
                        <button className="hover:bg-gray-800 font-bold rounded p-2 select-none">
                        <p><a href="https://github.com/lunarmlcat" target="_blank" rel="noopener noreferrer" className='text-cyan-600'><span className='px-2'><FontAwesomeIcon icon={faGithub} /></span>Github</a></p>
                        </button>
                        <br />
                        <button className="hover:bg-gray-800 font-bold rounded p-2 select-none">
                        <p><a href="https://twitter.com/lunarmlcat" target="_blank" rel="noopener noreferrer" className='text-blue-200'><span className='px-2'><FontAwesomeIcon icon={faTwitter} /></span>Twitter</a></p>
                        </button>
                        <br />
                        <button className="hover:bg-gray-800 font-bold rounded p-2 select-none">
                        <p><a href="https://www.kaggle.com/lunarmoon" target="_blank" rel="noopener noreferrer" className='text-cyan-200'><span className='px-3'><FontAwesomeIcon icon={faKaggle} /></span>Kaggle</a></p>
                        </button>
                        <br />
                        <br />
                        {/* Achievements at Kaggle */}
                        <p className='pb-2 text-xl font-bold underline decoration-solid decoration-4 decoration-red-800 text-orange-100'>Achievements at Kaggle</p>
                        <div className="pt-4 mx-auto w-3/4 grid grid-cols-1 gap-10 select-none">
                            {/* Dialog */}
                            <ShowCassavaDialog />
                            <ShowBrainDialog />
                        </div>
                        <br />
                        {/* Footer */}
                        <div className="w-full h-10 text-center table pt-3 select-none">
                            <span className='text-xs text-gray-500 table-cell align-middle'>© {year} Takanobu Nomura. All Rights Reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;