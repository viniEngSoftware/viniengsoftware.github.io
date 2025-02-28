object FormCadatro: TFormCadatro
  Left = 391
  Top = 116
  Caption = 'Sistema de cadastro'
  ClientHeight = 576
  ClientWidth = 856
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -12
  Font.Name = 'Segoe UI'
  Font.Style = []
  Position = poDesigned
  OnCreate = FormCreate
  TextHeight = 15
  object PageControl1: TPageControl
    Left = 1
    Top = 8
    Width = 863
    Height = 580
    ActivePage = Cadastro
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -17
    Font.Name = 'Segoe UI'
    Font.Style = [fsBold]
    ParentFont = False
    TabOrder = 0
    object Acesso: TTabSheet
      Caption = 'Acesso'
      object PanelAcesso: TPanel
        Left = 1
        Top = -5
        Width = 858
        Height = 306
        TabOrder = 0
        object LbCPFAcesso: TLabel
          Left = 48
          Top = 119
          Width = 24
          Height = 20
          Caption = 'CPF'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWindowText
          Font.Height = -15
          Font.Name = 'Segoe UI'
          Font.Style = []
          ParentFont = False
        end
        object LbEMAILAcesso: TLabel
          Left = 29
          Top = 244
          Width = 43
          Height = 20
          Caption = 'E-mail'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWindowText
          Font.Height = -15
          Font.Name = 'Segoe UI'
          Font.Style = []
          ParentFont = False
        end
        object LbTelefoneAcesso: TLabel
          Left = 10
          Top = 184
          Width = 62
          Height = 20
          Caption = 'Telefone'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWindowText
          Font.Height = -15
          Font.Name = 'Segoe UI'
          Font.Style = []
          ParentFont = False
        end
        object LbNomeAcesso: TLabel
          Left = 31
          Top = 60
          Width = 41
          Height = 20
          Caption = 'Nome'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWindowText
          Font.Height = -15
          Font.Name = 'Segoe UI'
          Font.Style = []
          ParentFont = False
        end
        object EdNomeAcesso: TEdit
          Left = 86
          Top = 52
          Width = 505
          Height = 28
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWindowText
          Font.Height = -15
          Font.Name = 'Segoe UI'
          Font.Style = []
          ParentFont = False
          TabOrder = 0
        end
        object EdCPFAcesso: TEdit
          Left = 86
          Top = 111
          Width = 273
          Height = 28
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWindowText
          Font.Height = -15
          Font.Name = 'Segoe UI'
          Font.Style = []
          ParentFont = False
          TabOrder = 1
        end
        object EdTelefoneAcesso: TEdit
          Left = 86
          Top = 176
          Width = 273
          Height = 28
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWindowText
          Font.Height = -15
          Font.Name = 'Segoe UI'
          Font.Style = []
          ParentFont = False
          TabOrder = 2
        end
        object EdEmailAcesso: TEdit
          Left = 86
          Top = 236
          Width = 505
          Height = 28
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWindowText
          Font.Height = -15
          Font.Name = 'Segoe UI'
          Font.Style = []
          ParentFont = False
          TabOrder = 3
        end
        object BtConsultar: TButton
          Left = 656
          Top = 220
          Width = 177
          Height = 57
          Caption = 'Consultar'
          TabOrder = 4
          OnClick = BtConsultarClick
        end
      end
      object DBGridAcesso: TDBGrid
        Left = 0
        Top = 296
        Width = 855
        Height = 249
        DataSource = umDados.DataSourceCadastro
        TabOrder = 1
        TitleFont.Charset = DEFAULT_CHARSET
        TitleFont.Color = clWindowText
        TitleFont.Height = -17
        TitleFont.Name = 'Segoe UI'
        TitleFont.Style = [fsBold]
      end
    end
    object Cadastro: TTabSheet
      Caption = 'Cadastro'
      ImageIndex = 1
      object PainelCadastro: TPanel
        Left = -4
        Top = -3
        Width = 858
        Height = 547
        TabOrder = 0
        object LbCPF: TLabel
          Left = 52
          Top = 153
          Width = 24
          Height = 20
          Caption = 'CPF'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWindowText
          Font.Height = -15
          Font.Name = 'Segoe UI'
          Font.Style = []
          ParentFont = False
        end
        object LbEMAIL: TLabel
          Left = 33
          Top = 278
          Width = 43
          Height = 20
          Caption = 'E-mail'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWindowText
          Font.Height = -15
          Font.Name = 'Segoe UI'
          Font.Style = []
          ParentFont = False
        end
        object LbTelefone: TLabel
          Left = 14
          Top = 218
          Width = 57
          Height = 20
          Caption = 'Telefone'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWindowText
          Font.Height = -15
          Font.Name = 'Segoe UI'
          Font.Style = []
          ParentFont = False
        end
        object LNome: TLabel
          Left = 35
          Top = 94
          Width = 41
          Height = 20
          Caption = 'Nome'
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWindowText
          Font.Height = -15
          Font.Name = 'Segoe UI'
          Font.Style = []
          ParentFont = False
        end
        object EdNome: TEdit
          Left = 90
          Top = 86
          Width = 505
          Height = 28
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWindowText
          Font.Height = -15
          Font.Name = 'Segoe UI'
          Font.Style = []
          ParentFont = False
          TabOrder = 0
        end
        object EdCPF: TEdit
          Left = 90
          Top = 145
          Width = 273
          Height = 28
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWindowText
          Font.Height = -15
          Font.Name = 'Segoe UI'
          Font.Style = []
          ParentFont = False
          TabOrder = 1
        end
        object EdTelefone: TEdit
          Left = 90
          Top = 210
          Width = 273
          Height = 28
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWindowText
          Font.Height = -15
          Font.Name = 'Segoe UI'
          Font.Style = []
          ParentFont = False
          TabOrder = 2
        end
        object EdEmail: TEdit
          Left = 90
          Top = 270
          Width = 505
          Height = 28
          Font.Charset = DEFAULT_CHARSET
          Font.Color = clWindowText
          Font.Height = -15
          Font.Name = 'Segoe UI'
          Font.Style = []
          ParentFont = False
          TabOrder = 3
        end
        object BtIncluir: TButton
          Left = 27
          Top = 396
          Width = 109
          Height = 41
          Caption = 'Incluir'
          TabOrder = 4
          OnClick = BtIncluirClick
        end
        object BtAlterar: TButton
          Left = 189
          Top = 396
          Width = 109
          Height = 41
          Caption = 'Alterar'
          TabOrder = 5
          OnClick = BtAlterarClick
        end
        object BtExcluir: TButton
          Left = 348
          Top = 396
          Width = 109
          Height = 41
          Caption = 'Excluir'
          TabOrder = 6
          OnClick = BtExcluirClick
        end
        object EdCodigo: TEdit
          Left = 90
          Top = 24
          Width = 121
          Height = 31
          TabOrder = 7
        end
        object BtConfirmar: TButton
          Left = 26
          Top = 396
          Width = 109
          Height = 41
          Caption = 'Confirmar'
          TabOrder = 8
          Visible = False
          OnClick = BtConfirmarClick
        end
        object BtDesistir: TButton
          Left = 193
          Top = 396
          Width = 109
          Height = 41
          Caption = 'Desistir'
          TabOrder = 9
          Visible = False
          OnClick = BtDesistirClick
        end
      end
    end
  end
end
