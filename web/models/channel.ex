defmodule Demo.Channel do
    use Demo.Web, :model
    
    schema "channels" do
        field :name, :string

        timestamps()
    end

    def changeset(struct, params \\ %{}) do
        struct
        |> cast(params, [:name])
        |> validate_required([:name])
        |> validate_length(:name, min: 0, max: 22)
        |> validate_format(:name, ~r/^[^.\s]+$/, message: "must not contain spaces or periods" )
        |> unsafe_validate_unique([:name], Demo.Repo)
        |> unique_constraint(:name)
    end
end