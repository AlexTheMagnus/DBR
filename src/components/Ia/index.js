import React, { Component } from 'react';
import Dice_Initialize from './tealDice/tealDice';

//import Navigation from './Navigation.js'

class Ia extends Component {
    render() {
        return (
            <div className="Ia mt-4">
                <header className="App-header">
                    <div>
                        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                        <meta name="keywords" content="DnD, dangeon and dragons, roleplay, dice, roller, 3D, RPG, wargame" />
                        <meta name="description" content="Online 3D dice roller" />
                        <title>teal 3d dice roller</title>
                        <style type="text/css" dangerouslySetInnerHTML={{__html: "@import \"../main.css\";" }} />
                        <style type="text/css" dangerouslySetInnerHTML={{__html: "@import \"dice.css\";" }} />
                        <div id="control_panel" className="control_panel">
                            HOLAAA
                            <body>
                                //Aqui aparecerán los dados
                            </body>
                        </div>
                        <div id="info_div" style={{display: 'none'}}>
                            <div className="center_field">
                                <span id="label" />
                            </div>
                            <div className="center_field">
                                <div className="bottom_field">
                                    <span id="labelhelp">click to continue or tap and drag again</span>
                                </div>
                            </div>
                        </div>
                        <div id="selector_div" style={{display: 'none'}}>
                            <div className="center_field">
                                <div id="sethelp">
                                    choose your dice set by clicking the dices or by direct input of notation,<br />
                                    tap and drag on free space of screen or hit throw button to roll
                                </div>
                            </div>
                                <div className="center_field">
                                <input type="text" id="set" defaultValue="4d6" /><br />
                                <button id="clear">clear</button>
                                <button style={{marginLeft: '0.6em'}} id="throw">throw</button>
                            </div>
                        </div>
                        <div id="canvas" />
                        {/*script type="text/javascript" src="https://drive.google.com/uc?id=0ByGeV2TiysmOelhLSnlUQ3ZMc2M"></script>
                        </body>
                        </html>
                        */}
                    </div>
                </header>

                
            </div>
        );
    }
}

export default Ia;
