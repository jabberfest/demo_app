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
    plug :fetch_session
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  scope "/", Demo do
    pipe_through :browser # Use the default browser stack

    get "/", ReactAppController, :index
    get "/app", AppController, :index
    get "/login", LoginController, :index
    get "/react_app", ReactAppController, :index
    get "/react_app/*glob", ReactAppController, :index
  end

  scope "/api", Demo do
    pipe_through :api

    resources "/channels", ChannelController, only: [:index, :create, :show] do
      resources "/channel_messages", ChannelMessageController, only: [:index, :create, :show]
    end
  end

  scope "/auth", Demo do
    pipe_through [:browser]

    get "/logout", AuthController, :delete
    get "/:provider", AuthController, :request
    get "/:provider/callback", AuthController, :callback
    post "/:provider/callback", AuthController, :callback
  end

  # Other scopes may use custom stacks.
  # scope "/api", Demo do
  #   pipe_through :api
  # end
end
