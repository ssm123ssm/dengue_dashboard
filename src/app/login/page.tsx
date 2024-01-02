"use client";

import { AppDispatch, RootState } from "@/store/store";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import OktaAuth from "@okta/okta-auth-js";
import { generateUUID } from "@/utility/helpers";
import { setSSOAuthData } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";

const Login: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { isAuthenticated, userRole } = useSelector(
    (state: RootState) => state.authReduce
  );

  const oktaAuth = new OktaAuth({
    issuer: process.env.ISSUER,
    clientId: process.env.CLIENT_ID,
    redirectUri: process.env.REDIRECT_URI,
  });

  // const getConfig = async () => {
  //   const conf = await axios.get(oktaConfigUrl);
  //   setConfig(conf.data);

  //   const state = generateUUID();
  //   const code = await generateCodeChallenge(state);

  //   const args = new URLSearchParams({
  //     scope: "openid",
  //     state: state,
  //     response_type: "code",
  //     client_id: oktaClientID,
  //     code_challenge_method: "S256",
  //     code_challenge: code,
  //     redirect_uri: oktaLoginURL,
  //   });

  //   await localStorage.removeItem("verifier");
  //   await localStorage.removeItem("code");
  //   await localStorage.setItem("verifier", state);

  //   window.open(
  //     `${conf.data.authorization_endpoint}?${args}`,
  //     "targetWindow",
  //     "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes"
  //   );

  //   listen();
  // };

  // const listen = () => {
  //   window.addEventListener("storage", async (ev: StorageEvent) => {
  //     const storageCode = `${ev.storageArea?.code}`;
  //     const verifier = `${ev.storageArea?.verifier}`;

  //     console.log(storageCode);
  //     console.log(verifier);
  //     if(verifier === "UN_VERIFIED") {

  //     }
  // if (!code && storageCode && verifier != "UN_VERIFIED") {
  //   setCode(storageCode);

  //   await localStorage.removeItem("verifier");
  //   await localStorage.removeItem("code");
  // }
  //   });
  // };

  const sso = async () => {
    const state = generateUUID();

    oktaAuth.token
      .getWithPopup({
        popupTitle: "Login",
        state: state,
        scopes: (process.env.SCOPES as string).split(","),
        clientId: process.env.CLIENT_ID,
        pkce: true,
      })
      .then((res) => dispatch(setSSOAuthData(res.tokens)))
      .catch(function (err) {
        console.log(err);
        // handle OAuthError or AuthSdkError (AuthSdkError will be thrown if app is in OAuthCallback state)
      });
  };

  // const getToken = async () => {
  //   const conf = await axios.post(config.token_endpoint, {
  //     grant_type: "authorization_code",
  //     redirect_uri: oktaLoginURL,
  //     code: code,
  //   });

  //   console.log(conf);
  // };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router, userRole]);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <form className="flex flex-col max-w-sm w-full">

      <div className="">
        <span className="font-bold text-lg">
          Centre for Clinical Management of Dengue and Dengue Haemorrhagic Fever
        </span>
      </div>
      <br />
        <div className="text-sm mb-4">
          <h1>Log in</h1>
          <span>Welcome back! Please enter your details.</span>
        </div>

        <div className="flex flex-col mb-4">
          <label>Email</label>
          <input />
        </div>

        <div className="flex flex-col">
          <label>Password</label>
          <input type="password" />
        </div>

        <div className="flex flex-row justify-between items-center my-4">
          <span className="flex flex-row items-center font-medium text-gray-700">
            <input type="checkbox" className="mr-1" />
            Remember for 30 days
          </span>

          <a href="">Forgot Password</a>
        </div>

        <div className="flex flex-col mb-4">
          <button type="button" className="primary w-full mb-2">
            Sign in
          </button>
          <button type="button" className="w-full" onClick={sso}>
            Sign in with SSO
          </button>
        </div>

        <span className="m-auto">
          Don&apos;t have an account? <a>Sign up</a>
        </span>
      </form>
    </div>
  );
};

export default Login;
