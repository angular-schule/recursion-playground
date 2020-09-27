import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Magier } from './types';

/*
// https://de.wikipedia.org/wiki/Liste_von_Zauberk%C3%BCnstlern
var i = 1;
JSON.stringify(Array.from(document.querySelectorAll('.mw-parser-output li > a'))
  .map(e => ({
    id: i++,
    name: e.innerHTML,
    description: e.nextSibling?.textContent.trim().replace(/[()]/g, '') })
), undefined, '  ');
*/

export const magier: Magier[] = [
  // #region
  {
    id: 1,
    name: 'Michael Ammar',
    description: '* 1956'
  },
  {
    id: 2,
    name: 'Andino',
    description: '* 1961'
  },
  {
    id: 3,
    name: 'Criss Angel',
    description: '* 1967'
  },
  {
    id: 4,
    name: 'John Henry Anderson',
    description: '1814–1874'
  },
  {
    id: 5,
    name: 'Rolf Andra',
    description: 'eigentlich Josef Fuchs 1907–1998'
  },
  {
    id: 6,
    name: 'Theodore Annemann',
    description: '1907–1942'
  },
  {
    id: 7,
    name: 'Alexander Adrion',
    description: '1923–2013'
  },
  {
    id: 8,
    name: 'Max Auzinger',
    description: 'Bühnenname: Ben Ali Bey, 1838–1928'
  },
  {
    id: 9,
    name: 'Ken Bardowicks',
    description: '* 1978'
  },
  {
    id: 10,
    name: 'Jean Beckerelli',
    description: 'eigentlich Jean Becker, 1860–1933'
  },
  {
    id: 11,
    name: 'Thimon von Berlepsch',
    description: '* 1978'
  },
  {
    id: 12,
    name: 'Ali Bongo',
    description: '1929–2009'
  },
  {
    id: 13,
    name: 'Bartolomeo Bosco',
    description: '1793–1863'
  },
  {
    id: 14,
    name: 'Bellachini',
    description: '1827–1885'
  },
  {
    id: 15,
    name: 'Harry Blackstone',
    description: '1885–1965'
  },
  {
    id: 16,
    name: 'David Blaine',
    description: '* 1973'
  },
  {
    id: 17,
    name: 'Borodin',
    description: 'eigentlich Ulf Bolling, 1933–2010'
  },
  {
    id: 18,
    name: 'Derren Brown',
    description: '* 1971'
  },
  {
    id: 19,
    name: 'Lance Burton',
    description: '* 1960'
  },
  {
    id: 20,
    name: 'John Calvert',
    description: '1911–2013'
  },
  {
    id: 21,
    name: 'Charles Joseph Carter',
    description: '1874–1936'
  },
  {
    id: 22,
    name: 'Ralfo Chefalo',
    description: '1885–1963'
  },
  {
    id: 23,
    name: 'Magic Christian',
    description: '* 1945'
  },
  {
    id: 24,
    name: 'Milbourne Christopher',
    description: '1914–1984'
  },
  {
    id: 25,
    name: 'David Copperfield',
    description: '* 1956'
  },
  {
    id: 26,
    name: 'Mr. Cox',
    description: '1932–2012'
  },
  {
    id: 27,
    name: 'Günther Dammann',
    description: '1910–1942'
  },
  {
    id: 28,
    name: 'Paul Daniels',
    description: '1938–2016'
  },
  {
    id: 29,
    name: 'Dante',
    description: '1883–1955'
  },
  {
    id: 30,
    name: 'William Davenport',
    description: '1841–1877'
  },
  {
    id: 31,
    name: 'Dedi',
    description: 'ca. 2900 v. Chr.'
  },
  {
    id: 32,
    name: 'David Devant',
    description: '1868–1941'
  },
  {
    id: 33,
    name: 'Ludwig Döbler',
    description: '1801–1864'
  },
  {
    id: 34,
    name: 'Thomas Nelson Downs',
    description: '1867–1938'
  },
  {
    id: 35,
    name: 'Joseph Dunninger',
    description: '1892–1975'
  },
  {
    id: 36,
    name: 'Oliver Erens',
    description: '* 1967'
  },
  {
    id: 37,
    name: 'Ehrlich Brothers',
    description: '* 1978–1982'
  },
  {
    id: 38,
    name: 'Ottokar Fischer',
    description: '1873–1940'
  },
  {
    id: 39,
    name: 'Flip',
    description: '* 1941'
  },
  {
    id: 40,
    name: 'Julius Frack',
    description: '* 1975'
  },
  {
    id: 41,
    name: 'Steven Frayne',
    description: '* 1982'
  },
  {
    id: 42,
    name: 'Joseph Fröhlich',
    description: ', Hofnarr und Hoftaschenspieler am Hofe Augusts des Starken 1694–1757'
  },
  {
    id: 43,
    name: 'Wiljalba Frikell',
    description: '1817–1903'
  },
  {
    id: 44,
    name: 'Uri Geller',
    description: '* 1946'
  },
  {
    id: 45,
    name: 'Horace Goldin',
    description: '1873–1939'
  },
  {
    id: 46,
    name: 'Albert Goshman',
    description: '1920–1991'
  },
  {
    id: 47,
    name: 'Valentino Graziadei',
    description: '1898–1965'
  },
  {
    id: 48,
    name: 'Erik Jan Hanussen',
    description: '1889–1933'
  },
  {
    id: 49,
    name: 'Robert Harbin',
    description: '1908–1978'
  },
  {
    id: 50,
    name: 'Pit Hartling',
    description: '* 1976'
  },
  {
    id: 51,
    name: 'Richard Hatch',
    description: '* 1955'
  },
  {
    id: 52,
    name: 'Alexander Heimbürger',
    description: '„Herr Alexander“ 1819–1909'
  },
  {
    id: 53,
    name: 'Doug Henning',
    description: '1947–2000'
  },
  {
    id: 54,
    name: 'Alexander Herrmann',
    description: '1844–1896'
  },
  {
    id: 55,
    name: 'Compars Herrmann',
    description: '1816–1887'
  },
  {
    id: 56,
    name: 'Johann Nepomuk Hofzinser',
    description: '1806–1875'
  },
  {
    id: 57,
    name: 'Conradi-Horster',
    description: '1870–1944'
  },
  {
    id: 58,
    name: 'Harry Houdini',
    description: '1874–1926'
  },
  {
    id: 59,
    name: 'Kevin James (Zauberer)',
    description: '* 1962'
  },
  {
    id: 60,
    name: 'Ricky Jay',
    description: '1946–2018'
  },
  {
    id: 61,
    name: 'Joshua Jay',
    description: '* 1981'
  },
  {
    id: 62,
    name: 'Fred Kaps',
    description: '1926–1980'
  },
  {
    id: 63,
    name: 'Kalanag',
    description: '1903–1963'
  },
  {
    id: 64,
    name: 'Alois Kassner',
    description: '1887–1970'
  },
  {
    id: 65,
    name: 'Jorgos Katsaros',
    description: '* 1972'
  },
  {
    id: 66,
    name: 'Remo Kell',
    description: '* 1971'
  },
  {
    id: 67,
    name: 'Harry Kellar',
    description: '1849–1922'
  },
  {
    id: 68,
    name: 'Peter Kersten',
    description: '* 1943'
  },
  {
    id: 69,
    name: 'Peter Heinz Kersten',
    description: '1929–2004'
  },
  {
    id: 70,
    name: 'Igor Kio',
    description: '1944–2006'
  },
  {
    id: 71,
    name: 'Hans Klok',
    description: '* 1969'
  },
  {
    id: 72,
    name: 'Buatier de Kolta',
    description: '1847–1903'
  },
  {
    id: 73,
    name: 'Anton Kratky-Baschik',
    description: '1810–1889'
  },
  {
    id: 74,
    name: 'Christopher Köhler',
    description: '* 1984'
  },
  {
    id: 75,
    name: 'Chung Ling Soo',
    description: '1861–1918'
  },
  {
    id: 76,
    name: 'Fritz Lisetti',
    description: '1889–1985'
  },
  {
    id: 77,
    name: 'Shin Lim',
    description: '* 1991'
  },
  {
    id: 78,
    name: 'Max Malini',
    description: '1873–1942'
  },
  {
    id: 79,
    name: 'Fu Manchu',
    description: '1904–1974'
  },
  {
    id: 80,
    name: 'Ed Marlo',
    description: '1913–1991'
  },
  {
    id: 81,
    name: 'Robert Marteau',
    description: '* 1962'
  },
  {
    id: 82,
    name: 'Fredo Marvelli',
    description: '1903–1971'
  },
  {
    id: 83,
    name: 'Marvelli jr.',
    description: '1932–2008'
  },
  {
    id: 84,
    name: 'John Nevil Maskelyne',
    description: '1863–1924'
  },
  {
    id: 85,
    name: 'Luís de Matos',
    description: '* 1970'
  },
  {
    id: 86,
    name: 'Max Maven',
    description: '* 1950'
  },
  {
    id: 87,
    name: 'Alexander Merk',
    description: '* 1987'
  },
  {
    id: 88,
    name: 'Moretti',
    description: '1928–2013'
  },
  {
    id: 89,
    name: 'John Mulholland',
    description: '1898–1970'
  },
  {
    id: 90,
    name: 'Albin Neumann',
    description: '1909–1990'
  },
  {
    id: 91,
    name: 'Natias Neutert',
    description: '* 1947'
  },
  {
    id: 92,
    name: 'Okito',
    description: '1875–1963'
  },
  {
    id: 93,
    name: 'Penn & Teller',
    description: '* 1955 oder 1948'
  },
  {
    id: 94,
    name: 'Jürgen Peter (Zauberkünstler)',
    description: '* 1961'
  },
  {
    id: 95,
    name: 'Peter Helten, der Zauberer mit der Tasche',
    description: '* 1952'
  },
  {
    id: 96,
    name: 'Philadelphia',
    description: 'vermutlich 1735–1795'
  },
  {
    id: 97,
    name: 'Simon Pierro',
    description: '* 1978'
  },
  {
    id: 98,
    name: 'Joseph Pinetti',
    description: '1750–1800'
  },
  {
    id: 99,
    name: 'Punx',
    description: ', Künstlername, eigentlich Ludwig Franz Wilhelm Hanemann 1907–1996'
  },
  {
    id: 100,
    name: 'James Randi',
    description: '* 1928'
  },
  /*
  {
    id: 101,
    name: 'Matthias Rauch',
    description: '* 1982'
  },
  {
    id: 102,
    name: 'Vincent Raven',
    description: '* 1966'
  },
  {
    id: 103,
    name: 'Fredo Raxon',
    description: '1923–2008'
  },
  {
    id: 104,
    name: 'Tony Rei',
    description: '* 1957'
  },
  {
    id: 105,
    name: 'Gerd Reitmaier',
    description: '* 1960, Würzburger Zauberkünstler, Bruder von'
  },
  {
    id: 106,
    name: 'Claus Reitmaier',
    description: ''
  },
  {
    id: 107,
    name: 'Eberhard Riese',
    description: '* 1951'
  },
  {
    id: 108,
    name: 'Jean Eugène Robert-Houdin',
    description: '1805–1871'
  },
  {
    id: 109,
    name: 'August Roterberg',
    description: '1867–1928'
  },
  {
    id: 110,
    name: 'David Roth (Zauberkünstler)',
    description: '* 1952'
  },
  {
    id: 111,
    name: 'Jan Rouven',
    description: '* 1977'
  },
  {
    id: 112,
    name: 'Roxanne',
    description: ''
  },
  {
    id: 113,
    name: 'Mario Richter',
    description: '* 1983'
  },
  {
    id: 114,
    name: 'Rovi - Ivor Parry',
    description: '* 29. November 1919; † 9. Juni 1996'
  },
  {
    id: 115,
    name: 'Hieronymus Scottus',
    description: 'Girolamo Scotto um 1530–nach 1602'
  },
  {
    id: 116,
    name: 'John Scarne',
    description: '1903–1985'
  },
  {
    id: 117,
    name: 'Siegfried und Roy',
    description: '* 1939/1944–2020'
  },
  {
    id: 118,
    name: 'Tony Slydini',
    description: '1901–1991'
  },
  {
    id: 119,
    name: 'Cody Stone',
    description: '* 1987'
  },
  {
    id: 120,
    name: 'Zati Sungur',
    description: '1898–1984'
  },
  {
    id: 121,
    name: 'Alexander Straub',
    description: '* 1995'
  },
  {
    id: 122,
    name: 'Amélie van Tass',
    description: '* 1987'
  },
  {
    id: 123,
    name: 'Juan Tamariz',
    description: '* 1942'
  },
  {
    id: 124,
    name: 'Thommy Ten',
    description: '* 1987'
  },
  {
    id: 125,
    name: 'Tom Thomson',
    description: '* 1972'
  },
  {
    id: 126,
    name: 'Ernest Thorn',
    description: '1853–1928'
  },
  {
    id: 127,
    name: 'Helge Thun',
    description: '* 1971'
  },
  {
    id: 128,
    name: 'Howard Thurston',
    description: '1869–1936'
  },
  {
    id: 129,
    name: 'Tombeck',
    description: '* 1974'
  },
  {
    id: 130,
    name: 'Topas',
    description: '* 1972'
  },
  {
    id: 131,
    name: 'Trixini',
    description: 'bürgerlich: Hansjörg Kindler, 1933–2015'
  },
  {
    id: 132,
    name: 'Peter Valance',
    description: '* 1980'
  },
  {
    id: 133,
    name: 'Val Valentino',
    description: '* 1956'
  },
  {
    id: 134,
    name: 'Dai Vernon',
    description: '1894–1992'
  },
  {
    id: 135,
    name: 'Kurt Volkmann',
    description: '1897–1958'
  },
  {
    id: 136,
    name: 'Wittus Witt',
    description: '* 1949'
  },
  {
    id: 137,
    name: 'Aloys Christof Wilsmann',
    description: '1899–1966'
  },
  {
    id: 138,
    name: 'Florian Zimmer',
    description: '* 1983'
  },
  {
    id: 139,
    name: 'Jochen Zmeck',
    description: '1929–2012'
  }
  */
  //#endregion
];

@Injectable({
  providedIn: 'root',
})
export class MagischerService {
  private itemsPerPage = 10;

  getData(page: number = 1): Observable<{ data: Magier[], page: number }> {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const data = magier.slice(startIndex, endIndex);

    return of({ data, page }).pipe(delay(1000));
  }
}
