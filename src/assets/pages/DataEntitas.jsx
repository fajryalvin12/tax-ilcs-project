import React from "react";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Menu from "../components/Menu";
import SelectMenu from "../components/SelectMenu";

const DataEntitas = () => {
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
                <div className="flex flex-col gap-4 border">
                  <div className="flex flex-col gap-2 border">
                    <div className="p-4">
                      <div className="font-semibold">Jenis Pemberitahuan</div>
                      <input
                        type="text"
                        placeholder="Pengusaha"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    <hr />
                    <div>
                      <h1 className="ml-4 text-2xl font-semibold">Pengusaha</h1>
                      <div className="flex gap-10 p-4 font-semibold w-full items-center justify-center">
                        <div className="w-full flex flex-col gap-2">
                          <div>Jenis Identitas</div>
                          <input
                            type="text"
                            placeholder="Free on Board"
                            className="input input-bordered w-full"
                          />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                          <div>NIB</div>
                          <input
                            type="text"
                            placeholder="Euro"
                            className="input input-bordered w-full"
                          />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                          <div>No Identitas</div>
                          <input
                            type="text"
                            placeholder="17.639.000"
                            className="input input-bordered w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-10 p-4 font-semibold w-full items-center justify-center">
                        <div className="w-1/3 flex flex-col gap-2">
                          <div>Nomor Identitas (16 Digit)</div>
                          <input
                            type="text"
                            placeholder="Free on Board"
                            className="input input-bordered w-full"
                          />
                        </div>
                        <div className="w-2/3 flex flex-col gap-2">
                          <div>Nama Perusahaan</div>
                          <input
                            type="text"
                            placeholder="Euro"
                            className="input input-bordered w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-10 p-4 font-semibold w-full items-center justify-center">
                        <div className="w-full flex flex-col gap-2">
                          <div>Provinsi</div>
                          <input
                            type="text"
                            placeholder="Free on Board"
                            className="input input-bordered w-full"
                          />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                          <div>Kabupaten/Kota</div>
                          <input
                            type="text"
                            placeholder="Euro"
                            className="input input-bordered w-full"
                          />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                          <div>Kecamatan</div>
                          <input
                            type="text"
                            placeholder="Euro"
                            className="input input-bordered w-full"
                          />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                          <div>Kode Pos</div>
                          <input
                            type="text"
                            placeholder="Euro"
                            className="input input-bordered w-full"
                          />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                          <div>RT / RW</div>
                          <input
                            type="text"
                            placeholder="Euro"
                            className="input input-bordered w-full"
                          />
                        </div>
                      </div>
                      <div className="flex gap-10 p-4 font-semibold w-full items-center justify-center">
                        <div className="w-full flex flex-col gap-2">
                          <div>Telephone</div>
                          <input
                            type="text"
                            placeholder="Free on Board"
                            className="input input-bordered w-full"
                          />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                          <div>Email</div>
                          <input
                            type="text"
                            placeholder="Euro"
                            className="input input-bordered w-full"
                          />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                          <div>Status</div>
                          <input
                            type="text"
                            placeholder="17.639.000"
                            className="input input-bordered w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
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

export default DataEntitas;
