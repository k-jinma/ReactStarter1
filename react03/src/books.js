const books = [ // 書籍データの配列
    // 各書籍はオブジェクトで表現
    {
        isbn: '978-3-16-148410-0',
        title: 'Learning React',
        price: 3000,
        summary: 'JavaScriptフレームワーク',
        download: true,
    },
    {
        isbn: '978-4-19-860215-7',
        title: 'JavaScript入門',
        price: 2500,
        summary: '初心者向けJavaScriptガイド',
        download: false,
    },
    {
        isbn: '978-1-59327-584-6',
        title: 'Eloquent JavaScript',
        price: 3500,
        summary: '深く学ぶJavaScript',
        download: true,
    },
    {
        isbn: '978-4-7741-6123-5',
        title: 'Web開発の基礎',
        price: 2800,
        summary: 'Web開発の基本概念と技術',
        download: false,
    },
];

export default books; // デフォルトエクスポート： 他のファイルから簡潔にインポートできるようにする