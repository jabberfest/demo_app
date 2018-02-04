defmodule Demo.Router do
  use Demo.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Demo do
    pipe_through :browser # Use the default browser stack

    get "/", ReactAppController, :index
    get "/app", AppController, :index
    get "/login", LoginController, :index
    get "/react_app", ReactAppController, :index
    get "/react_app/*glob", ReactAppController, :index

    resources "/channels", ChannelController, only: [:create]

  end

  scope "/auth", Demo do
    pipe_through [:browser]

    get "/:provider", AuthController, :request
    get "/:provider/callback", AuthController, :callback
    post "/:provider/callback", AuthController, :callback
    delete "/logout", AuthController, :delete  
  end

  # Other scopes may use custom stacks.
  # scope "/api", Demo do
  #   pipe_through :api
  # end
end
