var treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode: function (node) {

      if (["P", "LI", "H2", "H3"].indexOf(node.tagName) > -1) {
        return NodeFilter.FILTER_ACCEPT;
      } else {
        return NodeFilter.FILTER_SKIP;
      }
    }
  },
);

//var nodeList = [];


//console.log(nodeList);
(function translate() {
  let currentNode = treeWalker.nextNode()
  if (currentNode) {
    let txt = currentNode.innerText
    fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `auth_key=2b4199ae-d18b-3e78-3df3-d14873d6f8de:fx&text=${txt}&target_lang=EN`
    }).then(response => response.json())
      .then(data => {
        currentNode.innerText = data.translations[0].text
        setTimeout(translate, 1500)
      })

      .catch(error => console.error(error));

  } else {
    console.log("Done");
  }


})();

function deeplTranslate() {
  fetch('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `auth_key=2b4199ae-d18b-3e78-3df3-d14873d6f8de:fx&text=Hello, world!&target_lang=EN`
  }).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}




fetch("http://localhost:3000/article/460622")
  .then(response => response.json())
  .then(data => {
    console.log(data.content);
    translate(data.content);
  })
  .catch(error => console.error(error));

function translate(content) {
  let node = document.createElement("div");
  node.innerHTML = content;
  let treeWalker = document.createTreeWalker(
    node,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: function (node) {

        if (["P", "LI", "H2", "H3"].indexOf(node.tagName) > -1) {
          return NodeFilter.FILTER_ACCEPT;
        } else {
          return NodeFilter.FILTER_SKIP;
        }
      }
    },
  );



  (function traverse(treeWalker) {
    let currentNode = treeWalker.nextNode()
    if (currentNode) {
      let txt = currentNode.innerText
      fetch('https://api-free.deepl.com/v2/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `auth_key=2b4199ae-d18b-3e78-3df3-d14873d6f8de:fx&text=${txt}&target_lang=EN`
      }).then(response => response.json())
        .then(data => {
          currentNode.innerText = data.translations[0].text
          setTimeout(function () {
            traverse(treeWalker);
          }, 1000)
        }).catch(error => console.error(error));

    } else {
      console.log("Done");
      console.log(node.innerHTML);
    }
  })(treeWalker);

}


const requestListener = async function (req, res) {


  const reqUrl = url.parse(req.url).pathname;
  let keyword = url.parse(req.url,true).query.k;

  if(reqUrl == "/search") {
    try {
      let result = await $`rg ${keyword}`;
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(result);
    } catch (e) {
      res.end(JSON.stringify({error: e.stackTrace}));
    }

  }
}


// Select the node that will be observed for mutations
const targetNode = document.getElementById('some-id');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === 'childList') {
      console.log('A child node has been added or removed.');
    } else if (mutation.type === 'attributes') {
      console.log(`The ${mutation.attributeName} attribute was modified.`);
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
observer.disconnect();


ids2 = [100007001];

(function sendRequest() {
  let id  = cids.pop();
  if (id) {

    setTimeout(function () {
      fetch("https://time.geekbang.org/serv/v3/column/info", {
        "headers": {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,ja;q=0.6,sv;q=0.5",
          "cache-control": "no-cache",
          "content-type": "application/json",
          "pragma": "no-cache",
          "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin"
        },
        "referrer": "https://time.geekbang.org/column/intro/100098801",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": `{\"product_id\":${id},\"with_recommend_article\":true}`,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        let column = {
          info: JSON.stringify({
            title: data.data.title,
            subtitle: data.data.subtitle,
            unit: data.data.unit,
            type: data.data.type,
            seo: data.data.seo,
            path: data.data.path,
            catalog_pic_url: data.data.column.catalog_pic_url,
          }),
          column_id: data.data.extra.cid

        }
        saveColumn(column);

      }).catch(function (error) {
        console.log(error);
      });
      sendRequest();
    }, 8000);

  } else {
    console.log('done');
  }



})();


function saveColumn (c) {
  fetch("http://127.0.0.1:3000/column", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify(c)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

}
