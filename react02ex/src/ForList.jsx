export default function ForList({src}) {
    return ( // ルール: 必ず親が1つだけの構造にする必要があります。
        <dl>
            {
                src.map((book) => ( // ルール: 必ず親が1つだけの構造にする必要があります。
                    <> 
                        <dt><a href="">{book.title}</a></dt>
                        <dd>{book.isbn}</dd>
                        <dd>{book.price}円</dd>
                        <dd>{book.summary}</dd>
                        <dd>{book.download ? 'ダウンロード可' : 'ダウンロード不可'}</dd>
                    </>
                ))
            }
        </dl>
    );
}