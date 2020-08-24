import React from 'react';
import { AuthRoute, ProtectedRoute} from '../utils/route_utils'
import { Route, Switch } from 'react-router-dom';
import SignUpContainer from './session/signup_container'
import SignInFormContainer from './session/signin_container'
import TopHeader from './header/top_header_container'

import VideoFormContainer from './Video/video_form/video_form_container'
import MainDisplay from './Main/main_display'
import VideoShowContainer from './Video/video_show/video_show_container'

const App = () => (
    <div>
        <div>
            <Route path ='/' component={TopHeader}/>
            <Route exact path='/' component={MainDisplay}/>
            <Route exact path='/videos/:videoId' component={VideoShowContainer}/>
            <Switch>

                <ProtectedRoute path='/upload' component={VideoFormContainer}/>
                

                <AuthRoute path="/login" component={SignInFormContainer} /> 
                <AuthRoute path='/signup' component={SignUpContainer} />
                {/* <Route path='/' component={VideoIndexContainer} /> */}
            </Switch>
            
        
        </div>

    </div>
);

export default App;