object umDados: TumDados
  Height = 750
  Width = 1000
  PixelsPerInch = 120
  object Conexao: TFDConnection
    Params.Strings = (
      'DriverID=PG'
      'Database=vini'
      'User_Name=postgres'
      'Password=masterkey'
      'Server=localhost'
      'Port=5432')
    Connected = True
    Left = 32
    Top = 24
  end
  object FDQueryCadastro: TFDQuery
    Connection = Conexao
    SQL.Strings = (
      'SELECT * FROM clientes;')
    Left = 32
    Top = 120
  end
  object DataSourceCadastro: TDataSource
    AutoEdit = False
    DataSet = FDQueryCadastro
    Left = 160
    Top = 120
  end
  object FDPhysPgDriverLink: TFDPhysPgDriverLink
    VendorLib = 'C:\Users\vboxuser\Desktop\CADATRO_DE_CLIENTE\libpq.dll'
    Left = 152
    Top = 24
  end
end
