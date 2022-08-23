interface Article {
  title: string;
  content: string;
  chapter_id: number;
  article_id: number;
  column_id: number;

}

interface Column {
  column_id: number;
  articles: Article[];
  info?: ColumnInfo;
}
interface ColumnInfoAsStr {
  column_id: number;
  info: string;
}

interface ColumnInfo {
  title: string;
  subtitle: string;
  unit: string;
  type: string;
  catalog_pic_url: string;
  seo: Seo;
  path: Path
}
interface Path {
  desc: string;
  desc_html: string;
}
interface Seo {
  keywords: string[];
}
