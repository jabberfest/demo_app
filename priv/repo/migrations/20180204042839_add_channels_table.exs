defmodule Demo.Repo.Migrations.AddChannelsTable do
  use Ecto.Migration

  def change do
    create table(:channels) do
      add :name, :string
      timestamps()
    end

    create index(:channels, [:name])

  end
end
