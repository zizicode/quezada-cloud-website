import React, { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import css from "./styles_pages/styles-blog.module.css";
import styled from "@emotion/styled";
import { Box, Divider } from "@mui/material";
import { Pagination, PaginationItem } from "@mui/material";

import { posts } from "./../data/PostFakes";
import ItemPost from "../components/Blog/ItemPost/ItemPost";
import { SearchFilter } from "../components/SearchFilter/SearchFilter";
import { tags } from "../data/TagsFakes";

const Blog = () => {
  const [filterText, setFilterText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Tags
  const handleTagClick = (tagId) => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags(selectedTags.filter((id) => id !== tagId));
    } else {
      setSelectedTags([...selectedTags, tagId]);
    }
  };

  const handleFilterChange = (newFilterText) => {
    setFilterText(newFilterText);
  };

  // Search Filter
  const filteredItems = posts.filter((post) => {
    const titleMatch = post.title
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const tagsMatch =
      selectedTags.length === 0 || selectedTags.includes(post.tag_id);
    return titleMatch && tagsMatch;
  });

  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  // // Maneja el cambio de página
  // const handlePageChange = (event, page) => {
  //   // Puedes calcular el índice de inicio y fin para mostrar los elementos
  //   const startIndex = (page - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;
  //   setCurrentPage(page);
  // };

  return (
    <>
      <NavBar />

      <div className={css.header_blog}>
        <h1>Quezada | Nuestro Blog</h1>
        <p>
          Si deseas recibir novedades Quezada, puedes suscribirte a nuestro
          newsletter
        </p>
        <button>¡Suscríbete aquí!</button>
      </div>

      <Container>
        <SectionFilter>
          <ContentInputSearch>
            <SearchFilter
              items={filteredItems}
              onFilterChange={handleFilterChange}
            />
          </ContentInputSearch>
          <br />
          <Divider />
          {/* paginación */}
          <div className={css.pagination}>
            <Pagination
              shape="rounded"
              count={pageCount}
              page={currentPage}
              onChange={(event, page) => setCurrentPage(page)}
              renderItem={(item) => <PaginationItem {...item} />}
            />
          </div>
          <Divider />

          <ContentItemsFilter>
            <ol>
              <h3>Filtrar por tags</h3>
            </ol>
            <br />
            <ItemFilter>
              {/* Renderiza los tags */}
              {tags.map((tag) => (
                <li
                  key={tag.id}
                  id={`tag-${tag.id}`}
                  onClick={() => handleTagClick(tag.id)}
                  className={`${css.tag} ${
                    selectedTags.includes(tag.id) ? css["active-tag"] : ""
                  }`}
                >
                  {tag.nombre}
                </li>
              ))}
            </ItemFilter>
          </ContentItemsFilter>
        </SectionFilter>

        <ContainerPosts className={css.filtered_item}>
          {/* Renderiza los elementos de la página actual */}
          {filteredItems.slice(startIndex, endIndex).map((post, index) => (
            <ItemPost data={post} key={index} />
          ))}
        </ContainerPosts>
      </Container>
    </>
  );
};

export default Blog;

const Container = styled(Box)`
  width: 100%;
  max-width: 1500px;
  margin: auto;

  display: grid;
  grid-template-columns: 200px auto;
  gap: 20px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ContainerPosts = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  flex-wrap: wrap;
  gap: 25px;
`;

const SectionFilter = styled(Box)`
  width: 100%;
  padding: 0;
  color: #616161;
`;

const ContentItemsFilter = styled(Box)`
  padding: 20px 0 0 10px;
`;

const ItemFilter = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  gap: 9px;

  li {
    padding: 3px 6px;
    border-radius: 15px;
    border: 1px solid #f1f3ee;

    &:hover {
      cursor: pointer;
      background-color: #f1f3ee;
    }
  }
`;

const ContentInputSearch = styled(Box)`
  width: 100%;
  margin: 0 0 5px 0;
  padding: 0;
`;
