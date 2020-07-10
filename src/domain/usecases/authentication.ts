

type AutheticationParams = {
  email: string;
  password: string;
}

export interface Authentication {
  auth(params: AutheticationParams): Promise<AccountModel>
}
