object DataModule1: TDataModule1
  Height = 1080
  Width = 1440
  PixelsPerInch = 144
  object Conexao: TFDConnection
    Params.Strings = (
      'DriverID=PG'
      'Database=vini'
      'User_Name=postgres'
      'Password=masterkey'
      'Server=localhost'
      'Port=5432')
    Connected = True
    Left = 136
    Top = 264
  end
  object FDPhysPgDriverLink1: TFDPhysPgDriverLink
    Left = 280
    Top = 264
  end
  object FDQueryCadastro: TFDQuery
    Active = True
    Connection = Conexao
    SQL.Strings = (
      'SELECT * FROM clientes;')
    Left = 136
    Top = 472
  end
  object DataSourceCadastro: TDataSource
    DataSet = FDQueryCadastro
    Left = 272
    Top = 472
  end
end
