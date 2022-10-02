ids = ["HBbg4IDC1oW5rDAAAA==","HBaYzrqrgpG7qjAAAA==","HBa6yYCm99KDqjAAAA","HBbSk9TXsK3xpzAAAA","HBbi5crvhPropjAAAA","HBba3Ofe85LBpTAAAA","HBaUnYH8vb%2FkozAAAA","HBa464G%2BwfLZoTAAAA","HBbk1IjkosnbnzAAAA","HBaW3raUlIfbnzAAAA","HBb8iI%2Br2M2fnzAAAA","HBa6tJe0wImRnTAAAA","HBbW2OHE5tK4mjAAAA","HBbAsoz6hZ6EljAAAA","HBak3sO1gdfZkTAAAA","HBaqvZzPyLezjzAAAA","HBbEkryI%2BM6BjjAAAA","HBbip6%2Fn%2BMqgjTAAAA","HBaCl46ZyLGKizAAAA","HBbg24Tnwt7siDAAAA","HBaY88HCx5GmhTAAAA","HBaInLS9o8jhgTAAAA","HBbkv4iQwJ%2BE%2By8AAA","HBawrNuiq6b89i8AAA","HBbYwNSCmJ%2Fc9C8AAA","HBaMlo6ipIyp8y8AAA","HBbAwO6Yk8q67i8AAA","HBawpZnKoOu76S8AAA","HBbY6bTy5P3%2B5C8AAA","HBbCtY60%2B42F4y8AAA","HBbS3Krs1uuz4C8AAA","HBbAxoW7s9r23y8AAA","HBa42IPvjar23y8AAA","HBaKkbDj8YD23y8AAA","HBbMx%2Fz3vsz13y8AAA","HBbMte7mkqyV3y8AAA","HBaO64TE%2Bvvr2y8AAA","HBbMne3Hkavr1i8AAA","HBai2Z7G7IvM1C8AAA","HBbwu9nkpPz%2B0C8AAA","HBak%2F5bD0Py5zy8AAA","HBaI84SLjbDMyy8AAA","HBawr53RrJO4wC8AAA","HBaQyNu3n%2FeyvS8AAA","HBawqaOIxcmJuC8AAA","HBbC%2BMyS%2B8P6si8AAA","HBaGyPvs%2Brb5si8AAA","HBb6%2FanDgIT5si8AAA","HBa26peOk8SHny8AAA","HBb6992J283RmC8AAA","HBao%2FK3Vq83YlC8AAA","HBaQvuv1n47Pky8AAA","HBbamqrwiurIkC8AAA","HBbk%2BOi96cqGkC8AAA","HBbGoJfd0vuJjy8AAA","HBaOjLOBhY6hjS8AAA","HBaKx4TZnOqfii8AAA","HBa8noDn7OjXiC8AAA","HBby%2FprZpPDphy8AAA","HBawmMaw8bi8hy8AAA","HBaWxpCvivGYhi8AAA","HBbSt%2Bfgmb%2BehS8AAA","HBaAl4PU4J75gy8AAA","HBbI1tfR75vLgS8AAA","HBaCm%2BSz1pnjgC8AAA","HBamxvyV8Kbj%2FS4AAA","HBb0oJ3iyJOV8y4AAA","HBbo44PT%2F5%2F37i4AAA","HBbM%2FO7E28a20y4AAA","HBa4w%2B7E2oHT0i4AAA","HBbk6%2BiW7pKEzi4AAA","HBaesoyD3Zaeyi4AAA","HBbiuqC2kJfBxi4AAA","HBaWrMu5672yxC4AAA","HBboyLGP%2F62ctC4AAA","HBa2q%2FvVlKWspy4AAA","HBaszNXs%2FKbAlC4AAA","HBaC8qrDiYLbkC4AAA","HBack%2Bmw%2BJ%2BajC4AAA","HBa0vIqMwauxhC4AAA","HBbMivqfjI7i%2FC0AAA","HBbM7vaam8ma8C0AAA","HBb24MrF29Wy6y0AAA","HBam%2BsKAiMnU4y0AAA","HBa668u667Hk3y0AAA","HBb85qLElaXk1i0AAA","HBa06b7Mvqyq0C0AAA","HBbMiO6qroyfrS0AAA","HBbIvIjnloOepi0AAA","HBbIhcH4oJe1oy0AAA","HBaG2%2BXV4fHioC0AAA","HBaO2OvFksn0ny0AAA","HBbg46uh%2F4u6nS0AAA","HBbKzIXF3r%2FMmi0AAA","HBbGlf29jcm4mS0AAA","HBb%2Bm%2FGqrdHKli0AAA","HBb41LTK7drVky0AAA","HBbMx5P%2FkLDTky0AAA","HBbWv%2FiigdzWji0AAA","HBai7YvKks%2BAji0AAA","HBaEpNaZ6b%2B8iC0AAA","HBaUucm35b%2FXhi0AAA","HBb8grK6sOOygS0AAA","HBb%2BsqOv24%2BF%2FCwAAA","HBacoazSj%2BrK3CwAAA","HBaG1Nfqoqul2CwAAA","HBbCtfbygY%2BomiwAAA"];
ret = [];
tids = new Set();
function request() {
  let id =  ids.pop();
  if (!id) {
    return;
  }
  let cursor = decodeURI(id);
  cursor = cursor + "==";
  cursor = encodeURI(cursor);
  let url = `https://twitter.com/i/api/graphql/hLz5i9U3GrGoIPhtCw_0vA/Likes?variables=%7B%22userId%22%3A%223277306064%22%2C%22count%22%3A200%2C%22cursor%22%3A%22${cursor}%22%2C%22includePromotedContent%22%3Afalse%2C%22withSuperFollowsUserFields%22%3Atrue%2C%22withDownvotePerspective%22%3Afalse%2C%22withReactionsMetadata%22%3Afalse%2C%22withReactionsPerspective%22%3Afalse%2C%22withSuperFollowsTweetFields%22%3Atrue%2C%22withClientEventToken%22%3Afalse%2C%22withBirdwatchNotes%22%3Afalse%2C%22withVoice%22%3Atrue%2C%22withV2Timeline%22%3Atrue%7D&features=%7B%22unified_cards_follow_card_query_enabled%22%3Afalse%2C%22dont_mention_me_view_api_enabled%22%3Atrue%2C%22responsive_web_uc_gql_enabled%22%3Atrue%2C%22vibe_api_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Afalse%2C%22interactive_text_enabled%22%3Atrue%2C%22responsive_web_text_conversations_enabled%22%3Afalse%2C%22responsive_web_enhance_cards_enabled%22%3Atrue%7D`;

  fetch(url, {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,ja;q=0.6,sv;q=0.5",
      "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Chromium\";v=\"104\", \" Not A;Brand\";v=\"99\", \"Google Chrome\";v=\"104\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-csrf-token": "98f05a00af236005e3ae0d0e1d46b9ca4e95b7b0ed189787bd2839c224deda7d947b3688888d71dca64caa059b69ea770c225203711931ed3175f16c9c58eba7d87bdab39f42eef516ae2114b71041b6",
      "x-twitter-active-user": "yes",
      "x-twitter-auth-type": "OAuth2Session",
      "x-twitter-client-language": "en"
    },
    "referrer": "https://twitter.com/xxhher/likes",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  })
    .then(response => response.json())
    .then(data => {
      let entries = data.data.user.result.timeline_v2.timeline.instructions[0].entries;
      entries.forEach(entry => {
        if (entry.entryId.startsWith( "tweet")) {

          if (! tids.has(entry.content.itemContent.tweet_results.result.legacy.id_str)) {
            tids.add(entry.content.itemContent.tweet_results.result.legacy.id_str);
            ret.push({tid: entry.content.itemContent.tweet_results.result.legacy.id_str, text: entry.content.itemContent.tweet_results.result.legacy.full_text});


          }
        }
      });
      setTimeout(request, 1000);
    })
    .catch(error => console.error(error));
}

