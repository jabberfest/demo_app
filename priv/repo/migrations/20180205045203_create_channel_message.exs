defmodule Demo.Repo.Migrations.CreateChannelMessage do
  use Ecto.Migration

  def change do
    create table(:channel_messages) do
      add :name, :string
      add :avatar, :string
      add :message, :text

      timestamps()
    end

  end
end
