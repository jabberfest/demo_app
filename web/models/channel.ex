defmodule Demo.Channel do
    use Demo.Web, :model
    
    schema "channels" do
        field :name, :string

        has_many :channel_messages, Demo.ChannelMessage

        timestamps()
    end

    def changeset(struct, params \\ %{}) do
        struct
        |> cast(params, [:name])
        |> validate_required([:name])
        |> validate_length(:name, min: 0, max: 14)
        |> validate_format(:name, ~r/^[^.\s]+$/, message: "must not contain spaces or periods" )
        |> validate_format(:name, ~r/^[a-z0-9]+$/, message: "must be lowercase letters or numbers" )
        |> unsafe_validate_unique([:name], Demo.Repo)
        |> unique_constraint(:name)
    end
end