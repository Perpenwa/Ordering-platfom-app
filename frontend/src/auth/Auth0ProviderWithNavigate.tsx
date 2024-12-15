//importing the necessary components and types from the @auth0/auth0-react library
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

//defining the type for the props of the Auth0ProviderWithNavigate component
type Props = {
  children: React.ReactNode;
}

//to wrap up the applicaton with @auth0/auth0-react, providing authentication functionality using Auth0
const Auth0ProviderWithNavigate = ({ children }: Props) => {     //the main component function
    //fetching environmental variables
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

    if (!domain || !clientId || !redirectUri) {
        throw new Error('Auth0 configuration is missing');
    }

    //directing a user back to application after signingup o logging in
    const onRedirectCallback = (_appState?: AppState, user?: User) => {   
        console.log("USER", user);
    }
    return(
        //when a user signup or login, it will push to the url I provided
        <Auth0Provider domain={"domain"} clientId={"clientId"} authorizationParams={{
            redirect_uri: redirectUri,   
         }}
              //returns the AuthProider component wrapped around the children
         onRedirectCallback={onRedirectCallback}  
        >
            {children}
        </Auth0Provider>
    )
};

export default Auth0ProviderWithNavigate;