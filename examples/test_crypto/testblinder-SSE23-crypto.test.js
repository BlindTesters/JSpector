const crypto = require('crypto');

describe('blindtester-crypto.pbkdf2Sync', () => {
    test('crypto.pbkdf2Sync("seg-2023","salt0",1000.0,64.0,"sha512") should returns {"type":"Buffer","data":[101.0,161.0,8.0,172.0,123.0,228.0,177.0,148.0,250.0,162.0,40.0,83.0,37.0,141.0,13.0,120.0,181.0,43.0,56.0,18.0,240.0,227.0,86.0,245.0,122.0,173.0,68.0,126.0,156.0,39.0,54.0,165.0,29.0,82.0,14.0,183.0,140.0,164.0,131.0,239.0,6.0,242.0,134.0,100.0,164.0,19.0,195.0,5.0,63.0,24.0,148.0,129.0,28.0,37.0,129.0,221.0,194.0,123.0,252.0,126.0,92.0,49.0,208.0,170.0]}', () => {
        const crypto = require('crypto');
        const printHash = hash => {
            console.log(`Hash : ${ hash.toString('hex') }`);
        };
        var a = 0;

        expect(crypto.pbkdf2Sync("seg-2023","salt0",1000.0,64.0,"sha512").toJSON()).toMatchObject({"type":"Buffer","data":[101.0,161.0,8.0,172.0,123.0,228.0,177.0,148.0,250.0,162.0,40.0,83.0,37.0,141.0,13.0,120.0,181.0,43.0,56.0,18.0,240.0,227.0,86.0,245.0,122.0,173.0,68.0,126.0,156.0,39.0,54.0,165.0,29.0,82.0,14.0,183.0,140.0,164.0,131.0,239.0,6.0,242.0,134.0,100.0,164.0,19.0,195.0,5.0,63.0,24.0,148.0,129.0,28.0,37.0,129.0,221.0,194.0,123.0,252.0,126.0,92.0,49.0,208.0,170.0]});
    });
    test('crypto.pbkdf2Sync("seg-2023","salt1",1000.0,64.0,"sha512") should returns {"type":"Buffer","data":[240.0,116.0,132.0,55.0,74.0,225.0,243.0,252.0,186.0,190.0,90.0,32.0,117.0,28.0,18.0,3.0,87.0,8.0,157.0,26.0,187.0,43.0,149.0,121.0,139.0,134.0,46.0,43.0,142.0,58.0,151.0,208.0,205.0,185.0,245.0,149.0,193.0,150.0,5.0,94.0,170.0,114.0,23.0,198.0,230.0,181.0,108.0,201.0,112.0,132.0,24.0,84.0,142.0,75.0,76.0,177.0,77.0,248.0,171.0,109.0,220.0,85.0,141.0,207.0]}', () => {
        const crypto = require('crypto');
        const printHash = hash => {
            console.log(`Hash : ${ hash.toString('hex') }`);
        };
        var a = 0;
        var hash = crypto.pbkdf2Sync('seg-2023', 'salt0', 1000, 64, 'sha512');
        printHash(hash);
        a += 1;

        expect(crypto.pbkdf2Sync("seg-2023","salt1",1000.0,64.0,"sha512").toJSON()).toMatchObject({"type":"Buffer","data":[240.0,116.0,132.0,55.0,74.0,225.0,243.0,252.0,186.0,190.0,90.0,32.0,117.0,28.0,18.0,3.0,87.0,8.0,157.0,26.0,187.0,43.0,149.0,121.0,139.0,134.0,46.0,43.0,142.0,58.0,151.0,208.0,205.0,185.0,245.0,149.0,193.0,150.0,5.0,94.0,170.0,114.0,23.0,198.0,230.0,181.0,108.0,201.0,112.0,132.0,24.0,84.0,142.0,75.0,76.0,177.0,77.0,248.0,171.0,109.0,220.0,85.0,141.0,207.0]});
    });
    test('crypto.pbkdf2Sync("seg-2023","salt2",1000.0,64.0,"sha512") should returns {"type":"Buffer","data":[171.0,75.0,84.0,146.0,193.0,31.0,111.0,61.0,144.0,156.0,31.0,87.0,197.0,13.0,213.0,227.0,212.0,186.0,171.0,237.0,0.0,155.0,239.0,103.0,82.0,119.0,42.0,67.0,61.0,89.0,254.0,209.0,184.0,116.0,178.0,80.0,241.0,47.0,54.0,55.0,14.0,38.0,114.0,121.0,200.0,45.0,240.0,120.0,188.0,251.0,97.0,229.0,231.0,220.0,203.0,36.0,225.0,220.0,68.0,172.0,139.0,200.0,169.0,220.0]}', () => {
        const crypto = require('crypto');
        const printHash = hash => {
            console.log(`Hash : ${ hash.toString('hex') }`);
        };
        var a = 0;
        var hash = crypto.pbkdf2Sync('seg-2023', 'salt0', 1000, 64, 'sha512');
        printHash(hash);
        a += 1;
        var hash_2 = crypto.pbkdf2Sync('seg-2023', `salt${ a }`, 1000, 64, 'sha512');
        printHash(hash_2);
        a += 1;

        expect(crypto.pbkdf2Sync("seg-2023","salt2",1000.0,64.0,"sha512").toJSON()).toMatchObject({"type":"Buffer","data":[171.0,75.0,84.0,146.0,193.0,31.0,111.0,61.0,144.0,156.0,31.0,87.0,197.0,13.0,213.0,227.0,212.0,186.0,171.0,237.0,0.0,155.0,239.0,103.0,82.0,119.0,42.0,67.0,61.0,89.0,254.0,209.0,184.0,116.0,178.0,80.0,241.0,47.0,54.0,55.0,14.0,38.0,114.0,121.0,200.0,45.0,240.0,120.0,188.0,251.0,97.0,229.0,231.0,220.0,203.0,36.0,225.0,220.0,68.0,172.0,139.0,200.0,169.0,220.0]});
    });
    test('crypto.pbkdf2Sync("seg-2023","salt2",1000.0,64.0,"sha512") should returns {"type":"Buffer","data":[171.0,75.0,84.0,146.0,193.0,31.0,111.0,61.0,144.0,156.0,31.0,87.0,197.0,13.0,213.0,227.0,212.0,186.0,171.0,237.0,0.0,155.0,239.0,103.0,82.0,119.0,42.0,67.0,61.0,89.0,254.0,209.0,184.0,116.0,178.0,80.0,241.0,47.0,54.0,55.0,14.0,38.0,114.0,121.0,200.0,45.0,240.0,120.0,188.0,251.0,97.0,229.0,231.0,220.0,203.0,36.0,225.0,220.0,68.0,172.0,139.0,200.0,169.0,220.0]}', () => {
        const crypto = require('crypto');
        const printHash = hash => {
            console.log(`Hash : ${ hash.toString('hex') }`);
        };
        var a = 0;
        var hash = crypto.pbkdf2Sync('seg-2023', 'salt0', 1000, 64, 'sha512');
        printHash(hash);
        a += 1;
        var hash_2 = crypto.pbkdf2Sync('seg-2023', `salt${ a }`, 1000, 64, 'sha512');
        printHash(hash_2);
        a += 1;
        var hash_3 = crypto.pbkdf2Sync('seg-2023', `salt${ a }`, 1000, 64, 'sha512');
        printHash(hash_3);
        hash = crypto.pbkdf2Sync('seg-2023', 'salt' + a, 1000, 64, 'sha512');
        printHash(hash);
        a += 1;

        expect(crypto.pbkdf2Sync("seg-2023","salt2",1000.0,64.0,"sha512").toJSON()).toMatchObject({"type":"Buffer","data":[171.0,75.0,84.0,146.0,193.0,31.0,111.0,61.0,144.0,156.0,31.0,87.0,197.0,13.0,213.0,227.0,212.0,186.0,171.0,237.0,0.0,155.0,239.0,103.0,82.0,119.0,42.0,67.0,61.0,89.0,254.0,209.0,184.0,116.0,178.0,80.0,241.0,47.0,54.0,55.0,14.0,38.0,114.0,121.0,200.0,45.0,240.0,120.0,188.0,251.0,97.0,229.0,231.0,220.0,203.0,36.0,225.0,220.0,68.0,172.0,139.0,200.0,169.0,220.0]});
    });
    test('crypto.pbkdf2Sync("seg-2023","salt3",1000.0,64.0,"sha512") should returns {"type":"Buffer","data":[224.0,82.0,230.0,132.0,56.0,102.0,229.0,67.0,75.0,81.0,237.0,64.0,187.0,97.0,183.0,3.0,55.0,1.0,17.0,183.0,186.0,46.0,146.0,20.0,73.0,244.0,17.0,59.0,199.0,83.0,117.0,58.0,72.0,29.0,97.0,214.0,126.0,245.0,228.0,222.0,9.0,46.0,166.0,32.0,10.0,250.0,182.0,65.0,175.0,209.0,164.0,28.0,95.0,219.0,94.0,186.0,247.0,162.0,105.0,0.0,228.0,67.0,48.0,224.0]}', () => {
        const crypto = require('crypto');
        const printHash = hash => {
            console.log(`Hash : ${ hash.toString('hex') }`);
        };
        var a = 0;
        var hash = crypto.pbkdf2Sync('seg-2023', 'salt0', 1000, 64, 'sha512');
        printHash(hash);
        a += 1;
        var hash_2 = crypto.pbkdf2Sync('seg-2023', `salt${ a }`, 1000, 64, 'sha512');
        printHash(hash_2);
        a += 1;
        var hash_3 = crypto.pbkdf2Sync('seg-2023', `salt${ a }`, 1000, 64, 'sha512');
        printHash(hash_3);
        hash = crypto.pbkdf2Sync('seg-2023', 'salt' + a, 1000, 64, 'sha512');
        printHash(hash);
        a += 1;
        hash = crypto.pbkdf2Sync('seg-2023', 'salt' + a, 1000, 64, 'sha512');
        printHash(hash);
        a += 1;

        expect(crypto.pbkdf2Sync("seg-2023","salt3",1000.0,64.0,"sha512").toJSON()).toMatchObject({"type":"Buffer","data":[224.0,82.0,230.0,132.0,56.0,102.0,229.0,67.0,75.0,81.0,237.0,64.0,187.0,97.0,183.0,3.0,55.0,1.0,17.0,183.0,186.0,46.0,146.0,20.0,73.0,244.0,17.0,59.0,199.0,83.0,117.0,58.0,72.0,29.0,97.0,214.0,126.0,245.0,228.0,222.0,9.0,46.0,166.0,32.0,10.0,250.0,182.0,65.0,175.0,209.0,164.0,28.0,95.0,219.0,94.0,186.0,247.0,162.0,105.0,0.0,228.0,67.0,48.0,224.0]});
    });
    test('crypto.pbkdf2Sync("seg-2023","salt4",1000.0,64.0,"sha512") should returns {"type":"Buffer","data":[176.0,176.0,17.0,22.0,137.0,182.0,241.0,166.0,197.0,110.0,176.0,34.0,126.0,120.0,109.0,115.0,27.0,28.0,233.0,210.0,219.0,191.0,143.0,151.0,199.0,197.0,177.0,128.0,145.0,87.0,184.0,80.0,125.0,246.0,219.0,213.0,70.0,176.0,84.0,245.0,163.0,118.0,86.0,21.0,80.0,254.0,36.0,90.0,200.0,74.0,177.0,59.0,119.0,121.0,171.0,74.0,134.0,4.0,248.0,201.0,142.0,166.0,155.0,150.0]}', () => {
        const crypto = require('crypto');
        const printHash = hash => {
            console.log(`Hash : ${ hash.toString('hex') }`);
        };
        var a = 0;
        var hash = crypto.pbkdf2Sync('seg-2023', 'salt0', 1000, 64, 'sha512');
        printHash(hash);
        a += 1;
        var hash_2 = crypto.pbkdf2Sync('seg-2023', `salt${ a }`, 1000, 64, 'sha512');
        printHash(hash_2);
        a += 1;
        var hash_3 = crypto.pbkdf2Sync('seg-2023', `salt${ a }`, 1000, 64, 'sha512');
        printHash(hash_3);
        hash = crypto.pbkdf2Sync('seg-2023', 'salt' + a, 1000, 64, 'sha512');
        printHash(hash);
        a += 1;
        hash = crypto.pbkdf2Sync('seg-2023', 'salt' + a, 1000, 64, 'sha512');
        printHash(hash);
        a += 1;
        hash = crypto.pbkdf2Sync('seg-2023', 'salt' + a, 1000, 64, 'sha512');
        printHash(hash);
        a += 1;

        expect(crypto.pbkdf2Sync("seg-2023","salt4",1000.0,64.0,"sha512").toJSON()).toMatchObject({"type":"Buffer","data":[176.0,176.0,17.0,22.0,137.0,182.0,241.0,166.0,197.0,110.0,176.0,34.0,126.0,120.0,109.0,115.0,27.0,28.0,233.0,210.0,219.0,191.0,143.0,151.0,199.0,197.0,177.0,128.0,145.0,87.0,184.0,80.0,125.0,246.0,219.0,213.0,70.0,176.0,84.0,245.0,163.0,118.0,86.0,21.0,80.0,254.0,36.0,90.0,200.0,74.0,177.0,59.0,119.0,121.0,171.0,74.0,134.0,4.0,248.0,201.0,142.0,166.0,155.0,150.0]});
    });
    test('crypto.pbkdf2Sync("seg-2023","salt5",1000.0,64.0,"sha512") should returns {"type":"Buffer","data":[58.0,116.0,84.0,200.0,15.0,42.0,171.0,186.0,26.0,192.0,9.0,134.0,254.0,157.0,201.0,38.0,153.0,219.0,187.0,235.0,206.0,40.0,18.0,247.0,31.0,29.0,48.0,162.0,123.0,188.0,13.0,164.0,28.0,133.0,101.0,85.0,78.0,13.0,19.0,59.0,46.0,48.0,188.0,232.0,215.0,149.0,233.0,228.0,118.0,50.0,170.0,11.0,103.0,12.0,146.0,183.0,40.0,28.0,98.0,180.0,92.0,229.0,249.0,116.0]}', () => {
        const crypto = require('crypto');
        const printHash = hash => {
            console.log(`Hash : ${ hash.toString('hex') }`);
        };
        var a = 0;
        var hash = crypto.pbkdf2Sync('seg-2023', 'salt0', 1000, 64, 'sha512');
        printHash(hash);
        a += 1;
        var hash_2 = crypto.pbkdf2Sync('seg-2023', `salt${ a }`, 1000, 64, 'sha512');
        printHash(hash_2);
        a += 1;
        var hash_3 = crypto.pbkdf2Sync('seg-2023', `salt${ a }`, 1000, 64, 'sha512');
        printHash(hash_3);
        hash = crypto.pbkdf2Sync('seg-2023', 'salt' + a, 1000, 64, 'sha512');
        printHash(hash);
        a += 1;
        hash = crypto.pbkdf2Sync('seg-2023', 'salt' + a, 1000, 64, 'sha512');
        printHash(hash);
        a += 1;
        hash = crypto.pbkdf2Sync('seg-2023', 'salt' + a, 1000, 64, 'sha512');
        printHash(hash);
        a += 1;
        hash = crypto.pbkdf2Sync('seg-2023', 'salt' + a, 1000, 64, 'sha512');
        printHash(hash);
        a += 1;

        expect(crypto.pbkdf2Sync("seg-2023","salt5",1000.0,64.0,"sha512").toJSON()).toMatchObject({"type":"Buffer","data":[58.0,116.0,84.0,200.0,15.0,42.0,171.0,186.0,26.0,192.0,9.0,134.0,254.0,157.0,201.0,38.0,153.0,219.0,187.0,235.0,206.0,40.0,18.0,247.0,31.0,29.0,48.0,162.0,123.0,188.0,13.0,164.0,28.0,133.0,101.0,85.0,78.0,13.0,19.0,59.0,46.0,48.0,188.0,232.0,215.0,149.0,233.0,228.0,118.0,50.0,170.0,11.0,103.0,12.0,146.0,183.0,40.0,28.0,98.0,180.0,92.0,229.0,249.0,116.0]});
    });
    test('crypto.pbkdf2Sync("seg-2023","salt6",1000.0,64.0,"sha512") should returns {"type":"Buffer","data":[230.0,229.0,28.0,226.0,45.0,178.0,189.0,165.0,146.0,123.0,88.0,246.0,20.0,166.0,109.0,25.0,29.0,70.0,47.0,175.0,122.0,152.0,98.0,79.0,151.0,86.0,58.0,188.0,169.0,198.0,249.0,9.0,16.0,188.0,188.0,109.0,9.0,29.0,30.0,151.0,223.0,28.0,157.0,9.0,55.0,161.0,82.0,78.0,242.0,251.0,207.0,61.0,48.0,43.0,178.0,101.0,133.0,109.0,123.0,227.0,101.0,111.0,119.0,9.0]}', () => {
        const crypto = require('crypto');
        const printHash = hash => {
            console.log(`Hash : ${ hash.toString('hex') }`);
        };
        var a = 0;
        var hash = crypto.pbkdf2Sync('seg-2023', 'salt0', 1000, 64, 'sha512');
        printHash(hash);
        a += 1;
        var hash_2 = crypto.pbkdf2Sync('seg-2023', `salt${ a }`, 1000, 64, 'sha512');
        printHash(hash_2);
        a += 1;
        var hash_3 = crypto.pbkdf2Sync('seg-2023', `salt${ a }`, 1000, 64, 'sha512');
        printHash(hash_3);
        hash = crypto.pbkdf2Sync('seg-2023', 'salt' + a, 1000, 64, 'sha512');
        printHash(hash);
        a += 1;
        hash = crypto.pbkdf2Sync('seg-2023', 'salt' + a, 1000, 64, 'sha512');
        printHash(hash);
        a += 1;
        hash = crypto.pbkdf2Sync('seg-2023', 'salt' + a, 1000, 64, 'sha512');
        printHash(hash);
        a += 1;
        hash = crypto.pbkdf2Sync('seg-2023', 'salt' + a, 1000, 64, 'sha512');
        printHash(hash);
        a += 1;
        hash = crypto.pbkdf2Sync('seg-2023', 'salt' + a, 1000, 64, 'sha512');
        printHash(hash);
        a += 1;

        expect(crypto.pbkdf2Sync("seg-2023","salt6",1000.0,64.0,"sha512").toJSON()).toMatchObject({"type":"Buffer","data":[230.0,229.0,28.0,226.0,45.0,178.0,189.0,165.0,146.0,123.0,88.0,246.0,20.0,166.0,109.0,25.0,29.0,70.0,47.0,175.0,122.0,152.0,98.0,79.0,151.0,86.0,58.0,188.0,169.0,198.0,249.0,9.0,16.0,188.0,188.0,109.0,9.0,29.0,30.0,151.0,223.0,28.0,157.0,9.0,55.0,161.0,82.0,78.0,242.0,251.0,207.0,61.0,48.0,43.0,178.0,101.0,133.0,109.0,123.0,227.0,101.0,111.0,119.0,9.0]});
    });
});