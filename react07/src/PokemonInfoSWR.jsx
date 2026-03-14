import useSWR from "swr";

// useSWRが呼ばれたタイミングで実行される
const fetcher = (url) => fetch(url).then(res => res.json());

function PokemonInfoSWR() {
  const { data: pokemon, error, isLoading } = useSWR(
    "https://pokeapi.co/api/v2/pokemon/25",
    fetcher
  );

  if (isLoading) return <p style={{ padding: "20px" }}>読み込み中...</p>;
  if (error) return <p style={{ padding: "20px", color: "red" }}>エラー: {error.message}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>SWR版：ポケモン情報</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "20px",
                    padding: "16px", background: "#fff3e0", borderRadius: "12px" }}>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          style={{ width: "120px", height: "120px" }}
        />
        <div>
          <h3 style={{ margin: "0 0 8px 0", textTransform: "capitalize" }}>
            {pokemon.name}
          </h3>
          <p>図鑑No: {pokemon.id}</p>
          <p>身長: {pokemon.height / 10} m</p>
          <p>体重: {pokemon.weight / 10} kg</p>
          <p>タイプ: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
        </div>
      </div>
    </div>
  );
}

export default PokemonInfoSWR;