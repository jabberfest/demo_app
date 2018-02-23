defmodule Demo.Endpoint do
  use Phoenix.Endpoint, otp_app: :demo

  socket "/socket", Demo.UserSocket

  # Serve at "/" the static files from "priv/static" directory.
  #
  # You should set gzip to true if you are running phoenix.digest
  # when deploying your static files in production.
  if Application.get_env(:demo, Demo.QueryParamCache) |> Keyword.get(:active) do
    plug Plug.Static,
      at: "/", from: :demo, gzip: false,
      only: ~w(css fonts images js favicon.ico robots.txt privacy.html)
  else 
      plug Plug.Static,
        at: "/", from: :demo, gzip: true,
        only: ~w(css fonts images js favicon.ico robots.txt privacy.html),
        # This insures no waiting for 304 responses since we bust cache with file digset 
        cache_control_for_etags: false,
        cache_control_for_vsn_requests: false      
  end
  

  # Code reloading can be explicitly enabled under the
  # :code_reloader configuration of your endpoint.
  if code_reloading? do
    socket "/phoenix/live_reload/socket", Phoenix.LiveReloader.Socket
    plug Phoenix.LiveReloader
    plug Phoenix.CodeReloader
  end

  plug Plug.RequestId
  plug Plug.Logger

  plug Plug.Parsers,
    parsers: [:urlencoded, :multipart, :json],
    pass: ["*/*"],
    json_decoder: Poison

  plug Plug.MethodOverride
  plug Plug.Head

  # The session will be stored in the cookie and signed,
  # this means its contents can be read but not tampered with.
  # Set :encryption_salt if you would also like to encrypt it.
  plug Plug.Session,
    store: :cookie,
    key: "_demo_key",
    encryption_salt: System.get_env("SESSION_ENCRYPTION_SALT"),
    signing_salt: System.get_env("SESSION_SIGNING_SALT")
    
  plug PhoenixGon.Pipeline
  plug Demo.Router
end
