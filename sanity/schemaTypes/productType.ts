import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
    name: "product",
    title: "Products",
    type: "document",
    icon: TrolleyIcon,
    fields: [
        defineField({
            name: "name",
            title: "Product Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
                // slugify: (input) =>
                //     input
                //         .toLowerCase()
                //         .replace(/\s+/g, "-")
                //         .slice(0, 96),
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "blockContent",
        }),
        defineField({
            name: "images",
            title: "Image",
            type: "array",
            of: [{
                type: 'image',
                options: {
                    hotspot: true,
                },
            }]
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: "sizes",
            title: "Available Sizes",
            type: "array",
            of: [
                {
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Small', value: 'S' },
                            { title: 'Medium', value: 'M' },
                            { title: 'Large', value: 'L' },
                            { title: 'Extra Large', value: 'XL' }
                        ]
                    }
                }
            ],
            validation: Rule => Rule.unique()
        }),
        defineField({
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
        }),
        defineField({
            name: "stock",
            title: "Stock",
            type: "number",
            validation: (Rule) => Rule.min(0),
        }),
    ],
    preview: {
        select: {
            title: "name",
            media: "images.[0]",
            price: "price",
        },
        prepare(select) {
            return {
                title: select.title,
                subtittle: `$${select.price}`,
                media: select.media,
            }
        }
    }
});