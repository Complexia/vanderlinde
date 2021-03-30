// tslint:disable
// graphql typescript definitions

declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface IUser {
    __typename: 'User';
    email: string;
    password: string;
    firstName: string;
    lastName: string | null;
    username: string | null;
  }

  interface IError {
    __typename: 'Error';
    field: string;
    message: string;
  }

  interface IReturnValueLoginRegister {
    __typename: 'ReturnValueLoginRegister';
    user: IUser | null;
    error: IError | null;
  }

  interface IQuery {
    __typename: 'Query';
    hello: string;
    getAllUsers: Array<IUser | null> | null;
  }

  interface IHelloOnQueryArguments {
    name?: string | null;
  }

  interface IMutation {
    __typename: 'Mutation';
    register: IUser;
    login: IReturnValueLoginRegister | null;
  }

  interface IRegisterOnMutationArguments {
    email: string;
    password: string;
    firstName: string;
    lastName?: string | null;
    username?: string | null;
  }

  interface ILoginOnMutationArguments {
    email: string;
    password: string;
  }
}

// tslint:enable
