import { Product } from '@/model/product.model'
import { Shipment } from '@/enum/shipment.enum'
import { game, gameConsole, joystick } from '@/mock/categories.mock'

export const productsMock = [
  new Product(
    '1',
    'Console Nintendo Switch 2, Modelo Nacional de Tomada',
    4_499.9,
    gameConsole,
    Shipment.AMAZON,
    'https://http2.mlstatic.com/D_NQ_NP_788400-MLA99958400949_112025-O.webp',
    'Capacidade: 256 GB. Tela de 7,9 polegadas em Full HD com suporte a HDR',
    9,
  ),
  new Product(
    '2',
    'The Legend of Zelda: Tears of the Kingdom Standard Edition (Físico)',
    369.9,
    game,
    Shipment.FREE,
    'https://http2.mlstatic.com/D_NQ_NP_2X_707262-MLA99984357937_112025-F.webp',
    'Plataforma: Nintendo. Edição: Standard Edition. Formato: Físico.',
    0,
  ),
  new Product(
    '3',
    'Console Portátil Art Brink Brick Game 9999 in 1 Preto com 9999 Jogos',
    19.02,
    gameConsole,
    Shipment.AMAZON,
    'https://http2.mlstatic.com/D_NQ_NP_2X_817787-MLA99595361808_122025-F.webp',
    'Capacidade da bateria de 10 mAh para longa duração de diversão. Duração máxima da bateria de até 6 horas.',
    0,
  ),
  new Product(
    '4',
    'Controle Colorido Sem Fio Compativel Com Ps4 Pc Celular Branco',
    173.94,
    joystick,
    Shipment.FREE,
    'https://http2.mlstatic.com/D_NQ_NP_2X_629827-MLB96027269230_102025-F.webp',
    'Unidades por kit: 1 Possui Bluetooth. Tela sensível ao toque.Unidades por kit: 1 Possui Bluetooth. Tela sensível ao toque.',
    32
  ),
]
