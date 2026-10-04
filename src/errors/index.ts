// https://chatgpt.com/share/6abad45c-3e10-83e9-a585-0bab8fe43b87

export class ApplicationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ApplicationError'
  }
}

export class AuthenticationError extends ApplicationError {
  constructor(message = 'Acesso negado. Autenticação necessária') {
    super(message)
    this.name = 'AuthenticationError'
  }
}

export class AuthorizationError extends ApplicationError {
  constructor(message = 'Acesso negado. Sem permissão') {
    super(message)
    this.name = 'AuthorizationError'
  }
}

export class NotFoundError extends ApplicationError {
  constructor(message = 'Recurso não encontrado') {
    super(message)
    this.name = 'NotFoundError'
  }
}