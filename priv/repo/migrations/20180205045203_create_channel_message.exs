defmodule Demo.Repo.Migrations.CreateChannelMessage do
  use Ecto.Migration

  def change do
    create table(:channel_message) do
      add :name, :string
      add :message, :string

      timestamps()
    end

  end
end
