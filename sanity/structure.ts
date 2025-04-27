import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Santoz Fellas')
    .items([
      // Create a list item for a category document type
      S.listItem()
        .title('Categories')
        .child(S.documentTypeList('category')),
      S.divider(),
      // Filter out product and category from the default list items
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["post", "category"].includes(item.getId()!)
      ),
    ]);