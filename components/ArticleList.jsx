import articleStyles from "../styles/Article.module.scss";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.title} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
