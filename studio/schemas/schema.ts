// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import Menu from "./documents/Menu";
import Page from "./documents/Page";
import Hero from "./sections/Hero";
import Grid from "./sections/Grid";
import GridItem from "./objects/GridItem";
import Testimonial from "./sections/Testimonial";
import Text from "./sections/Text";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    Page,
    Hero,
    Grid,
    GridItem,
    Testimonial,
    Text,
    Menu,
  ]),
});
