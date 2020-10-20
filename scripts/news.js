var _articles;

$(async function(){
    if(!_articles){
        _articles = await getNewsArticles();
    }

    let $container = $("#news-container");
    for(const article of _articles){
        let date = article.PublishDate;
        let idx = date.indexOf("T");
        date = article.PublishDate.substring(0, idx);

        let html = `
            <div class="news-article" onclick="window.open('${article.FeedUrl}');">
                <div class="news-image"><img src="${article.ImageUrl}"></img></div>
                <div class="news-info">
                    <div>${date}</div>
                    <div>${article.Title}</div>
                </div>
            </div>
        `;
        $container.append(html);
    }
});

async function getNewsArticles(){
    return new Promise((resolve, reject) => {
        $.get( "https://bridge-protocol.azurewebsites.net/api/news", function( data ) {
            resolve(data.items);
        })
        .then(() => {
            throw new Error('Could not retrieeve articles');
        })
    })
}