import React, { Component } from 'react';
import { colors, bp } from '../../theme';

import logo_uniandes from './logo_uniandes.png';

class Header extends Component {
    render() {
        const { color_grey_light_2 } = colors;
        const { bp_small, bp_smallest, bp_medium } = bp;
        return (
            <header className="header">
                <div className="logo1">
                    <img
                        src={logo_uniandes}
                        alt="Universidad de los Andes"
                        className="logo_uniandes"
                    />
                </div>
                <div className="page-header">
                    <h1>Monitoreo de Agua en Colombia</h1>
                </div>

                <div className="logo2" />
                <style jsx>{`
                    .logo1,
                    h1,
                    .logo2 {
                        flex: 1;
                        text-align: center;
                        color: black;
                    }

                    .logo1 {
                        margin-left: 10px;
                        text-align: left;
                        margin-right: auto;
                    }
                    .header {
                        font-size: 1.4rem;
                        height: 8rem;
                        background-color: #fff;
                        border-bottom: 1px solid ${color_grey_light_2};
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        @media ${bp_medium} {
                            h1 {
                                font-size: 2.5rem;
                            }
                        }

                        @media ${bp_smallest} {
                            flex-wrap: wrap;
                            align-content: space-around;
                            height: 11rem;
                        }
                    }

                    .logo_uniandes {
                        margin-top: 0.8rem;
                        margin-left: auto;
                        width: 170px;

                        @media ${bp_small} {
                            width: 80px;
                        }
                    }
                `}</style>
            </header>
        );
    }
}

export default Header;
