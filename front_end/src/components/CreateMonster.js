import React from "react"
import {
  Container,
  Row,
  Col,
  Form,
  FormLabel,
  FormGroup,
  FormControl,
} from "react-bootstrap"
import Range from "./form/Range"
import { CREATE_MONSTER_PARAMS_INITIAL_STATE } from "../constants"

const CreateMonster = ({
  params,
  range_default_params,
  handleOnChange,
  handleOnChangeParams,
  handleOnSubmit,
}) => {
  const range_components = Object.keys(CREATE_MONSTER_PARAMS_INITIAL_STATE).map(
    key => {
      return (
        <Col key={key} xs={{ span: 8, offset: 2 }}>
          <Range
            key={key}
            label={key}
            value={params[key]}
            {...range_default_params}
            handleOnChange={event => handleOnChangeParams(event, key)}
          />
        </Col>
      )
    }
  )

  return (
    <Container>
      <Row>
        <Col>
          <h2>Monster List</h2>
          <Form onSubmit={handleOnSubmit}>
            <Col xs={{ span: 8, offset: 2 }}>
              <FormGroup controlId="name">
                <FormLabel>なまえ</FormLabel>
                <FormControl
                  type="text"
                  required={true}
                  value={params["name"]}
                  onChange={event => handleOnChange(event, "name")}
                />
              </FormGroup>
              <FormGroup controlId="description">
                <FormLabel>とくちょう</FormLabel>
                <FormControl
                  as="textarea"
                  required={true}
                  value={params["description"]}
                  onChange={event => handleOnChange(event, "description")}
                  cols="40"
                  rows="5"
                />
              </FormGroup>
            </Col>

            {range_components}

            <input type="submit" value="作成" className="btn btn-primary" />
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default CreateMonster
