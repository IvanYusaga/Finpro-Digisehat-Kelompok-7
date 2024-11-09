namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Barang;

class KeranjangController extends Controller
{
    public function tambah($id, Request $request)
{
    // Cek apakah barang ada di database
    $barang = Barang::find($id);
    if (!$barang) {
        return response()->json(['error' => 'Barang tidak ditemukan!'], 404);
    }

    // Cek apakah session keranjang sudah ada, jika belum buat
    $keranjang = session()->get('keranjang', []);

    // Jika barang sudah ada dalam keranjang, tambahkan jumlahnya
    if (isset($keranjang[$id])) {
        $keranjang[$id]['jumlah']++;
    } else {
        // Tambahkan barang ke keranjang
        $keranjang[$id] = [
            'nama' => $barang->nama_barang,
            'harga' => $barang->harga,
            'jumlah' => 1,
        ];
    }

    // Simpan kembali keranjang di session
    session()->put('keranjang', $keranjang);

    // Kembalikan respons JSON untuk notifikasi atau badge
    return response()->json([
        'message' => 'Item berhasil ditambahkan ke keranjang!',
        'total_items' => array_sum(array_column($keranjang, 'jumlah')), // Total item dalam keranjang
    ]);
}


}
