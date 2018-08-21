//TODO: Manage to edit a simple user ("index.js:2178 Warning: Missing translation for key: "params cannot be empty"")

import {
  Edit,
  List,
  Show,
  Create,
  ChipField,
  Datagrid,
  DisabledInput,
  EditButton,
  ReferenceManyField,
  ReferenceField,
  ShowButton,
  SimpleForm,
  SingleFieldList,
  TextField,
  TextInput,
  Filter,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberField,
  BooleanField,
  SelectInput,
  SimpleShowLayout,
  DisabledField
} from "react-admin";
import React from 'react'

export const AttributeFilter = props => (
  <Filter {...props}>
    <TextInput label="Search by name" source="name_contains" alwaysOn />
  </Filter>
)

export const AttributeList = props => (
  <List filters={<AttributeFilter />} {...props}>
    <Datagrid>
      <TextField source="id"/>
      <TextField source="value"/>
      <ReferenceField source="category.id" reference="Category">
        <TextField source="name"/>
      </ReferenceField>
      <ReferenceField source="shop.id" reference="Shop">
        <TextField source="name"/>
      </ReferenceField>
      <EditButton/>
      <ShowButton/>
    </Datagrid>
  </List>
);

export const AttributeEdit = props => (
  <Edit title="Edit a attribute" {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="value" />
      <ReferenceInput source="category.id" reference="Category">
        <SelectInput optionText="name"/>
      </ReferenceInput>
      <ReferenceInput source="shop.id" reference="Shop">
        <SelectInput optionText="name"/>
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const AttributeShow = props => (
  <Show title="Show a attribute" {...props}>
    <SimpleShowLayout>
      <TextField source="id"/>
      <TextField source="value"/>
      <ReferenceField source="category.id" reference="Category">
        <TextField source="name"/>
      </ReferenceField>
      <ReferenceField source="shop.id" reference="Shop">
        <TextField source="name"/>
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

export const AttributeCreate = props => (
  <Create title="Create a attribute" {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="value" />
      <ReferenceInput source="category.id" reference="Category">
        <SelectInput optionText="name"/>
      </ReferenceInput>
      <ReferenceInput source="shop.id" reference="Shop">
        <SelectInput optionText="name"/>
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
