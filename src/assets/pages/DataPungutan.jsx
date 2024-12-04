import { useEffect, React, useState } from "react";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Menu from "../components/Menu";
import SelectMenu from "../components/SelectMenu";
import { GiCycle } from "react-icons/gi";
import axios from "axios";

const DataPungutan = () => {
  const [data, setData] = useState({});

  const link =
    "https://api-hub.ilcs.co.id/test/v2/dataPungutan?id_aju=04eb6a72-bb63-5aed-5e92-f58a3bfd5da2";

  async function fetchData() {
    try {
      const response = await axios.get(link);
      const results = response.data.data;
      console.log(results);
      setData(results);
    } catch {
      console.error("Belum nyambung");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <PageTitle />
        <div className="bg-gray-200">
          <div className="bg-white m-6">
            <Menu />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center font-semibold p-4">
                <div className="text-2xl">Data Pemberitahuan</div>
                <div className="flex gap-4">
                  <div>No Pengajuan : 20120B388FAE20240402000001</div>
                  <div>KSWP : VALID</div>
                  <div>Jenis API : 02</div>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-4">
                <SelectMenu />
                <div className="flex flex-col gap-2 border">
                  <div className="flex gap-10 p-4 font-semibold w-full items-center justify-center">
                    <div className="w-full flex flex-col gap-2">
                      <div>Incoterms</div>
                      <input
                        type="text"
                        placeholder="Free on Board"
                        className="input input-bordered w-full"
                        defaultValue={data.ur_incoterm}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div>Valuta</div>
                      <input
                        type="text"
                        placeholder="Euro"
                        className="input input-bordered w-full"
                        defaultValue={data.ur_valuta}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div>Kurs</div>
                      <div className="flex items-center gap-4">
                        <input
                          type="text"
                          placeholder="17.639.000"
                          className="input input-bordered w-full"
                          defaultValue={data.nilai_kurs}
                        />
                        <button>
                          <GiCycle />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-10 p-4 font-semibold w-full items-center justify-center">
                    <div className="w-full flex flex-col gap-2">
                      <div>Nilai</div>
                      <input
                        type="text"
                        placeholder="Free on Board"
                        className="input input-bordered w-full"
                        defaultValue={data.nilai_incoterm}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div>Biaya Tambahan</div>
                      <input
                        type="text"
                        placeholder="Euro"
                        className="input input-bordered w-full"
                        defaultValue={data.biaya_tambahan}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div>Biaya Pengurang</div>
                      <input
                        type="text"
                        placeholder="Euro"
                        className="input input-bordered w-full"
                        defaultValue={data.biaya_pengurang}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div>Voluntary Declaration</div>
                      <input
                        type="text"
                        placeholder="Euro"
                        className="input input-bordered w-full"
                        defaultValue={data.tarif_vd}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div>Nilai FOB</div>
                      <input
                        type="text"
                        placeholder="Euro"
                        className="input input-bordered w-full"
                        defaultValue={data.fob}
                      />
                    </div>
                  </div>
                  <div className="flex gap-10 p-4 font-semibold w-full items-center justify-center">
                    <div className="w-full flex flex-col gap-2">
                      <div>Asuransi Bayar di</div>
                      <input
                        type="text"
                        placeholder="Free on Board"
                        className="input input-bordered w-full"
                        defaultValue={data.ur_asuransi}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div>Asuransi</div>
                      <input
                        type="text"
                        placeholder="Euro"
                        className="input input-bordered w-full"
                        defaultValue={data.nilai_asuransi}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div>Freight</div>
                      <input
                        type="text"
                        placeholder="17.639.000"
                        className="input input-bordered w-full"
                        defaultValue={data.freight}
                      />
                    </div>
                  </div>
                  <div className="flex gap-10 p-4 font-semibold w-full items-center justify-center">
                    <div className="w-full flex flex-col gap-2">
                      <div>CIF</div>
                      <input
                        type="text"
                        placeholder="Free on Board"
                        className="input input-bordered w-full"
                        defaultValue={data.nilai_pabean}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div>CIF Rp</div>
                      <input
                        type="text"
                        placeholder="Euro"
                        className="input input-bordered w-full"
                        defaultValue={data.nilai_pabean_idr}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div>Bruto</div>
                      <input
                        type="text"
                        placeholder="Euro"
                        className="input input-bordered w-full"
                        defaultValue={data.berat_kotor}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div>Netto</div>
                      <input
                        type="text"
                        placeholder="Euro"
                        className="input input-bordered w-full"
                        defaultValue={data.berat_bersih}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <div>Flag Kontainer</div>
                      <input
                        type="text"
                        placeholder="Euro"
                        className="input input-bordered w-full"
                        defaultValue={data.ur_flag_curah}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  <button className="btn btn-outline btn-primary">
                    Sebelumnya
                  </button>
                  <button className="btn btn-outline btn-primary">
                    Selanjutnya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex items-center m-4">
          Copyright &copy; 2020 All Rights Reserved | Indonesia National Single
          Window
        </div>
      </div>
    </>
  );
};

export default DataPungutan;
