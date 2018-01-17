# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :demo,
  ecto_repos: [Demo.Repo]

# Configures the endpoint
config :demo, Demo.Endpoint,
  url: [host: "localhost"],
  secret_key_base: System.get_env("ENDPOINT_SECRET"),
  render_errors: [view: Demo.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Demo.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Configures Guardian Auth
config :demo, Demo.Guardian,
  issuer: "demo",
  secret_key: System.get_env("GUARDIAN_SECRET")

# Configures UberAuth

config :ueberauth, Ueberauth,
  providers: [
    facebook: { Ueberauth.Strategy.Facebook, [
    display: "popup"
    ]}
  ]

config :ueberauth, Ueberauth.Strategy.Facebook.OAuth,
  client_id: System.get_env("FACEBOOK_APP_ID"),
  client_secret: System.get_env("FACEBOOK_APP_SECRET"),
  redirect_uri: System.get_env("FACEBOOK_REDIRECT_URI")

config :demo, Demo.AuthAccessPipeline,
  module: Demo.Guardian,
  error_handler: Demo.AuthErrorHandler


# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
