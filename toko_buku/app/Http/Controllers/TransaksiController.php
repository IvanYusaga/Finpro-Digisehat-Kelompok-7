namespace App\Http\Controllers;

use App\Models\Barang;
use App\Models\Keranjang;
use App\Models\Transaksi;
use Illuminate\Http\Request;

class TransaksiController extends Controller
{
    public function beli()
    {
        $keranjang = Keranjang::with('barang')->get();

        foreach ($keranjang as $item) {
            $barang = Barang::find($item->barang_id);

            if ($barang->jumlah >= $item->quantity) {
                $barang->decrement('jumlah', $item->quantity);

                Transaksi::create([
                    'barang_id' => $item->barang_id,
                    'quantity' => $item->quantity,
                ]);
            } else {
                return back()->with('error', 'Stok tidak mencukupi untuk ' . $barang->nama_barang);
            }
        }

        Keranjang::truncate();

        return redirect()->route('transaksi.index')->with('success', 'Pembelian berhasil.');
    }

    public function index()
    {
        $transaksi = Transaksi::with('barang')->get();
        return view('transaksi.index', compact('transaksi'));
    }
}
