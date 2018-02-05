defmodule Demo.ChannelMessage do
  use Demo.Web, :model

  schema "channel_message" do
    field :name, :string
    field :message, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :message])
    |> validate_required([:name, :message])
  end
end
