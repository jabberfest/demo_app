defmodule Demo.Repo.Migrations.AddChannelMessageAssociation do
  use Ecto.Migration

  def change do
    alter table(:channel_messages) do
      add :channel_id, references(:channels)
    end

    create index(:channel_messages, [:channel_id])

  end
end
