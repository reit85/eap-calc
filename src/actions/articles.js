import db from '../firebase/firebase';

// ADD_ARTICLE
export const addArticle = article => ({
  type: 'ADD_ARTICLE',
  article,
});

export const startAddArticle = (articleData = {}) => {
  return (dispatch) => {
    const {
      nameDe = '',
      nameEn = '',
      descriptionDe = '',
      descriptionEn = '',
      manufacturer = '',
      price = 0,
      priceType = '',
      createdAt = 0,
      createdBy = '',
      editedAt = 0,
      editedBy = '',
    } = articleData;
    const article = {
      nameDe,
      nameEn,
      descriptionDe,
      descriptionEn,
      manufacturer,
      price,
      priceType,
      createdAt,
      createdBy,
      editedAt,
      editedBy,
    };

    return db.ref('/articles').push(article).then((ref) => {
      dispatch(addArticle({
        id: ref.key,
        ...article,
      }));
    });
  };
};

// REMOVE_ARTICLE
export const removeArticle = ({ id } = {}) => ({
  type: 'REMOVE_ARTICLE',
  id,
});

export const startRemoveArticle = ({ id } = {}) => {
  return (dispatch) => {
    return db.ref(`/articles/${id}`).remove().then(() => {
      dispatch(removeArticle({ id }));
    });
  };
};

// EDIT_ARTICLE
export const editArticle = (id, updates) => ({
  type: 'EDIT_ARTICLE',
  id,
  updates,
});

export const startEditArticle = (id, updates) => {
  return (dispatch) => {
    return db.ref(`/articles/${id}`).update(updates).then(() => {
      dispatch(editArticle(id, updates));
    });
  };
};

export const setArticles = articles => ({
  type: 'SET_ARTICLES',
  articles,
});

export const startSetArticles = () => {
  return (dispatch) => {
    return db.ref('/articles').once('value').then((snapshot) => {
      const articles = [];

      snapshot.forEach((childSnapshot) => {
        articles.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
      dispatch(setArticles(articles));
    });
  };
};
