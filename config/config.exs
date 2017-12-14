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
  secret_key_base: "XajXE+1XyNmn1mf6DhPSbHwzb7HQPBQAZ31jG4/mO/ot1BaBegZplJgPcz0uSsnA",
  render_errors: [view: Demo.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Demo.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# # Configures Guardian Auth
# config :demo, Demo.Guardian,
#   issuer: "demo",
#   secret_key: "1V7iQqWoOD+6WfzWfqrC7Fk/I+FW6D2w/LSeZZ/nCoemIpTcIRq/l9psUBMawZR+"

# Configures UberAuth

config :ueberauth, Ueberauth,
  providers: [
    facebook: { Ueberauth.Strategy.Facebook, [] }
  ]

config :ueberauth, Ueberauth.Strategy.Facebook.OAuth,
  client_id: System.get_env("FACEBOOK_APP_ID"),
  client_secret: System.get_env("FACEBOOK_APP_SECRET"),
  redirect_uri: System.get_env("FACEBOOK_REDIRECT_URI")


# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
