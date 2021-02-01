import articleStyle from "../styles/Article.module.scss";
import Link from "next/link";

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={articleStyle.card}>
        <h2>{article.title} &rarr;</h2>
        <p>{article.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
